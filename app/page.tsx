'use client';

import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ProfileHeader } from '@/components/profile-header';
import { SocialLinks } from '@/components/social-links';
import { toast } from 'sonner';
import { Heart, Plus, Trash2, Edit2, Save, X } from 'lucide-react';

const API_BASE = 'https://telemetria-node-production-0641.up.railway.app/api';

interface WishItem {
  id?: string;
  item: string;
}

interface Profile {
  bio: string;
  avatar?: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const [profile, setProfile] = useState<Profile>({ bio: '' });
  const [wishlist, setWishlist] = useState<WishItem[]>([]);
  const [newItem, setNewItem] = useState('');
  const [editingBio, setEditingBio] = useState(false);
  const [tempBio, setTempBio] = useState('');
  const [loading, setLoading] = useState(false);

  // Cargar datos iniciales
  useEffect(() => {
    loadProfile();
    loadWishlist();
  }, []);

  const loadProfile = async () => {
    try {
      const res = await fetch(`${API_BASE}/perfil`);
      if (res.ok) {
        const data = await res.json();
        setProfile(data || { bio: '' });
        setTempBio(data?.bio || '');
      }
    } catch (error) {
      console.error('Error cargando perfil:', error);
    }
  };

  const loadWishlist = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/wishlist`);
      if (res.ok) {
        const data = await res.json();
        setWishlist(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error('Error cargando wishlist:', error);
      toast.error('Error al cargar la lista de deseos');
    } finally {
      setLoading(false);
    }
  };

  const saveBio = async () => {
    if (!tempBio.trim()) {
      toast.error('La biografía no puede estar vacía');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/perfil`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bio: tempBio }),
      });

      if (res.ok) {
        setProfile({ ...profile, bio: tempBio });
        setEditingBio(false);
        toast.success('Biografía guardada exitosamente');
      } else {
        toast.error('Error al guardar la biografía');
      }
    } catch (error) {
      console.error('Error guardando bio:', error);
      toast.error('Error al guardar la biografía');
    } finally {
      setLoading(false);
    }
  };

  const addWishItem = async () => {
    if (!newItem.trim()) {
      toast.error('Ingresa un producto o enlace');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/wishlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item: newItem }),
      });

      if (res.ok) {
        setNewItem('');
        await loadWishlist();
        toast.success('Producto añadido a la lista de deseos');
      } else {
        toast.error('Error al añadir el producto');
      }
    } catch (error) {
      console.error('Error agregando item:', error);
      toast.error('Error al añadir el producto');
    } finally {
      setLoading(false);
    }
  };

  const deleteWishItem = async (index: number) => {
    try {
      setLoading(true);
      const items = wishlist.filter((_, i) => i !== index);
      setWishlist(items);
      toast.success('Producto eliminado');
    } catch (error) {
      console.error('Error eliminando item:', error);
      toast.error('Error al eliminar el producto');
    } finally {
      setLoading(false);
    }
  };

  const cancelEditBio = () => {
    setTempBio(profile.bio);
    setEditingBio(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-2xl">
        {/* Header del Perfil */}
        <ProfileHeader />

        {/* Tabs Principal */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">Sobre mí</TabsTrigger>
            <TabsTrigger value="wishlist">Lista de deseos</TabsTrigger>
            <TabsTrigger value="links">Enlaces</TabsTrigger>
          </TabsList>

          {/* TAB: Sobre mí */}
          <TabsContent value="about" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Mi Biografía</CardTitle>
                    <CardDescription>Cuéntanos sobre ti</CardDescription>
                  </div>
                  {!editingBio && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingBio(true)}
                    >
                      <Edit2 className="w-4 h-4 mr-2" />
                      Editar
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {!editingBio ? (
                  <div className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                    <p className="text-slate-300 leading-relaxed">
                      {profile.bio || 'No hay biografía aún. ¡Edita y comparte sobre ti!'}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Escribe tu biografía aquí..."
                      value={tempBio}
                      onChange={(e) => setTempBio(e.target.value)}
                      className="min-h-32"
                    />
                    <div className="flex gap-2 justify-end">
                      <Button
                        variant="outline"
                        onClick={cancelEditBio}
                        disabled={loading}
                      >
                        <X className="w-4 h-4 mr-2" />
                        Cancelar
                      </Button>
                      <Button
                        onClick={saveBio}
                        disabled={loading}
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Guardar
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB: Lista de Deseos */}
          <TabsContent value="wishlist" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  Mi Lista de Deseos
                </CardTitle>
                <CardDescription>Productos y cosas que deseas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Agregar nuevo item */}
                <div className="flex gap-2">
                  <Input
                    placeholder="Producto o enlace..."
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') addWishItem();
                    }}
                    disabled={loading}
                  />
                  <Button
                    onClick={addWishItem}
                    disabled={loading}
                    size="icon"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                {/* Lista de items */}
                <div className="space-y-2">
                  {wishlist.length === 0 ? (
                    <div className="text-center py-8 text-slate-400">
                      <Heart className="w-12 h-12 mx-auto mb-2 opacity-20" />
                      <p>Aún no hay elementos en tu lista de deseos</p>
                    </div>
                  ) : (
                    wishlist.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-slate-500 transition"
                      >
                        <span className="text-slate-200">{item.item}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteWishItem(index)}
                          disabled={loading}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB: Enlaces */}
          <TabsContent value="links" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Mis Enlaces Sociales</CardTitle>
                <CardDescription>Conecta conmigo en tus plataformas favoritas</CardDescription>
              </CardHeader>
              <CardContent>
                <SocialLinks />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 text-center text-slate-400 text-sm">
          <p>© 2026 VALDOCER • Plataforma de Enlaces</p>
        </div>
      </div>
    </main>
  );
}