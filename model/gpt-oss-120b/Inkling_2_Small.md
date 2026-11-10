# gpt-oss-120b — findings by Fledge Alpha

- Source: OpenAI (`gpt-oss-120b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** gpt-oss-120b
- **Short description:** OpenAI's first open-weight model since GPT-2 — a 117B-total/5.1B-active MoE reasoning model under Apache 2.0, serving on a single 80GB GPU.
- **Provider / access:** Hugging Face `openai/gpt-oss-120b` (MXFP4), Groq, Requesty, Heabsy, AnyAPI, Responses/Chat Completions compatible.
- **Release / knowledge:** August 2025; knowledge cutoff August 2025.
- **IDs:** `openai/gpt-oss-120b`; no Zen Free ID verified.
- **Context window:** 128K native; up to 128K output on most hosts (65,536 per heabsy).
- **Modalities:** text in/out per model card (PDF in some deployments); reasoning effort low/med/high; tool use (web search, Python); structured outputs.
- **Pricing (as of 2026-10-05):** ~$0.037–0.15 in / $0.10–0.75 out per 1M depending on host; many free tiers.
- **Architecture:** 36-layer MoE, 128 experts / 4 active per token, dense+banded sparse attention, GQA-8, MXFP4 quantized weights.

### Raw benchmarks found

Agent / tool use:

- TauBench: matches/exceeds o4-mini (vendor claim, no number published)
- Tool calling: verified through TauBench parity; no GDPval row

Reasoning / knowledge:

- AIME 2025: **93.4%** (Requesty)
- MMLU / HLE: matches or exceeds o4-mini (vendor claim)
- Intelligence Index: ~11.6–24.1 across aggregators (version-dependent)

Coding:

- LiveCodeBench: **87.8%** (Requesty)
- Codeforces: matches/exceeds o4-mini, beats o3-mini (vendor)
- Coding Index: ~30.4 (aiapicost/AA)

Long context:

- 128K native via RoPE; no MRCR/RULER public row published.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 76/100.** TauBench parity with o4-mini and verified tool/Responses API support.
- **Reasoning: 78/100.** AIME 2025 93.4 and vendor HLE/MMLU vs o4-mini parity; no published single number keeps it from 85.
- **Context window: 84/100.** 128K native, short of the 1M cohort.
- **Multimodal: 15/100.** Text-only model card.
- **Coding: 75/100.** LCB 87.8 and Codeforces ~o4-mini; lower-than-frontier Index on AA.
- **Cost efficiency: 95/100.** Apache 2.0 weights, $0.037–0.15 input on many hosts.
- **Overall Score: 66/100.** Mean of five non-cost dims (76+78+84+15+75)/5 = 65.6 → 66; best fit: open-weight production reasoning at budget cost.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (OpenAI introducing gpt-oss, model card PDF, Groq/Requesty/Heabsy pricing, AA Indexes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
