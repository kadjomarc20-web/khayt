/**
 * Vrai si le « clic » vient du clavier (Entrée / Espace sur un bouton) :
 * le navigateur envoie alors un événement click avec detail === 0.
 * Règle du projet : une action déclenchée au clavier n'est jamais animée.
 */
export function isKeyboardClick(event: { detail: number }): boolean {
  return event.detail === 0;
}
