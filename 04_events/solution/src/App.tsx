export default function App() {
    const options = [
        { label: "Visa", value: "visa" },
        { label: "Master Card", value: "mc" },
    ];
    return (
        <RadioSet
            name="credit-card-provider"
            options={options}
            onChange={(provider) => alert(`You picked ${provider}`)}
        />
    );
}

type Option = {
    label: string;
    value: string;
};

type RadioSetProps = {
    name: string;
    options: Array<Option>;
    onChange: (value: string) => void;
};

function RadioSet({ name, options, onChange }: RadioSetProps) {
    return (
        <fieldset>
            {options.map(option => (
                <label key={option.value}>
                    {option.label}
                    <input
                        onClick={() => onChange(option.value)}
                        type="radio"
                        name={name}
                        value={option.value}
                    />
                </label>
            ))}
        </fieldset>
    );
}
