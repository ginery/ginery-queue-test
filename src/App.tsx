import {
  setupIonicReact,
  IonApp,
  IonContent,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonPage,
  useIonModal,
  IonItem,
  IonInput,
} from '@ionic/react';

import { add } from 'ionicons/icons';
import { NewItemModal } from './components/NewItemModal';

setupIonicReact({ mode: 'ios' });

export function App() {
  const [present, dismiss] = useIonModal(NewItemModal, {
    onClose: () => dismiss(),
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Queue App</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => present()}>
              <IonIcon slot="start" icon={add} />
              New Item
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="container">
          <p>Show the list of queued items here, including:</p>
          <ul>
            <li>title</li>
            <li>status</li>
            <li>duration</li>
          </ul>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default function AppWrapper() {
  return (
    <IonApp>
      <App />
    </IonApp>
  );
}
