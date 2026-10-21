# Ling 3.0 Flash Sante — findings by Claude Opus 4.6

- Source: Ant Group / Ling 3.0 Flash Sante (`opencode/ling-3.0-flash-sante`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Sante
- **Short description:** Ant Group's 124B/5.1B-active health variant of Ling 3.0 Flash for medical reasoning and retrieval. Achieves DiagnosisArena-MCQ 83.8%. API-only — explicitly not a medical device. Professional oversight mandatory.
- **Provider / access:** API-only `opencode/ling-3.0-flash-sante`. OpenRouter rate-limited free tier. No Zen Free ID.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately mid-2026.
- **IDs:** `opencode/ling-3.0-flash-sante` (no Free ID on Zen)
- **Context window:** 262,144 total; 32,768 max output (OpenRouter). Verified via meta.json.
- **Modalities:** Text input/output only. No vision — medical images explicitly out of scope.
- **Pricing (as of 2026-10-21):** $0.042/$0.123 per 1M (list). Vercel $0 promo ended 2026-10-04. OpenRouter retains rate-limited free tier.
- **Architecture:** 124B total parameters, 5.1B active (MoE). Same base as Ling 3.0 Flash, retuned for medical reasoning and retrieval-grade search. API-only — not a medical device.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found (medical variant, not designed for terminal tasks)

Reasoning / knowledge:

- DiagnosisArena-MCQ: **83.8%** (meta.json / Ant Group report)
- GPQA Diamond: no verified public score found
- Note: Medical domain specialization — general reasoning benchmarks may not capture the model's intended use case

Coding:

- SWE-bench Verified: no verified public score found (not designed for coding)

Long context:

- 262K context. No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 38/100.** Medical retrieval-grade search capability. Not designed for general agentic tool use. Capped by domain specialization and lack of agentic benchmarks.
- **Reasoning: 52/100.** DiagnosisArena-MCQ 83.8% shows strong medical reasoning. Retuned for health domain — general reasoning likely below the base Ling 3.0 Flash on non-medical tasks. Scored for domain-specific excellence.
- **Context window: 78/100.** 262K context per tier mapping (~256K = 78). Shorter max output (32K) than the base model.
- **Multimodal: 15/100.** Text-only. Medical images explicitly out of scope. Fixed at 15.
- **Coding: 25/100.** Not designed for coding. Medical domain specialization. Scored conservatively at minimum viable.
- **Cost efficiency: 92/100.** $0.042/$0.123 per 1M is extremely cheap. Rate-limited free tier available. Excellent value for medical text analysis.
- **Overall Score: 42/100.** Mean of (38 + 52 + 78 + 15 + 25) / 5 = 41.6 → 42. A highly specialized medical reasoning model — scores low on general LLM dimensions but excels at its intended purpose (medical diagnosis and retrieval). Not comparable to general-purpose models. Best for health-domain text analysis under professional oversight.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-21
- Method: Meta.json analysis and Ant Group documentation; scores are normalized 1–100 interpretations, not official vendor scores. Model is a medical domain specialist — general LLM scoring may not reflect its intended value.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
