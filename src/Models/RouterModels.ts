export interface RouterProps {
    path: string;
    component: React.FC<{}>;
    exact: boolean;
}
