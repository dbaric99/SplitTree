import { Title, Card } from "../../../components/common-components";
import styles from "./TeamsPage.module.css";

function TeamsPage() {
  return (
    <div>
      <Title classes={styles.subtitle}>Quick actions</Title>
      <Card icon="add-team" title="New Team" description="Create a new team" />
    </div>
  );
}

export { TeamsPage };
