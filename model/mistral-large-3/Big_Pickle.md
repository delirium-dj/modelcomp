# Mistral Large 3 — findings by Big Pickle

- Source: Mistral AI/Mistral Large 3
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3
- **Short description:** Mistral AI's 675B-parameter sparse MoE (41B active) flagship of the Mistral 3 generation, released Apache 2.0 in December 2025. It is now deprecated in favour of the Mistral Large 4 preview; the entry remains in the dataset as the last open-weight Large checkpoint.
- **Provider / access:** Mistral AI La Plateforme (`mistral-large-3`), open weights on Hugging Face (`mistralai/Mistral-Large-3-675B-Instruct-2512`, Apache 2.0), and third-party hosts.
- **Release / knowledge:** Released 2025-12-02; deprecated to `mistral-large-4-preview`; knowledge cutoff not published.
- **IDs:** `mistralai/mistral-large-3`; no Zen Free ID.
- **Context window:** 256,000 total (Artificial Analysis).
- **Modalities:** text + image in; text out; reasoning no (instruct configuration); tool calls yes.
- **Pricing (as of 2026-11-11):** $0.50 / $1.50 per 1M in/out; cached input $0.05. Self-hosting the Apache-2.0 weights is $0.
- **Architecture:** 675B total / 41B active sparse mixture-of-experts; Apache 2.0.

### Raw benchmarks found

All rows are Artificial Analysis harness results.

Agent / tool use:

- Terminal-Bench 2.1: **12.0%**
- Terminal-Bench Hard: **15.9%**
- Terminal-Bench 4.0: **0%**
- Tau2-Bench: **24.6%**
- Tau-Banking: **5.8%**
- GDPval-AA: **427.62 Elo**
- AutomationBench: **1.5%**
- GDP-PDF all-pass: **1.2%**
- OSWorld / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **68.0%**
- HLE: **4.2%**; HLE-Diamond: **4.5%**
- AIME 2025: **38.0%**
- LCR: **36.0%**
- IFBench: **36.2%**
- MLCR: **1.1%**
- CritPt: **0%**
- AA Intelligence Index: not published for this deprecated entry.

Coding:

- LiveCodeBench: **46.5%**
- SciCode: **36.6%**
- FrontierCode 2.0 / SWE-bench Verified / SWE-Pro / DeepSWE: no verified public score found.

Multimodal:

- MMMU-Pro: **55.7%**

Long context:

- LCR **36.0%** on the 256K window — the window is advertised but retrieval degrades sharply at length.

### Normalized scores (1–100)

- **Tool use: 38/100.** Tau2 24.6%, GDPval 427.62 and TB 2.1 12.0% are below the mid-tier agentic band; AutomationBench 1.5% confirms long-horizon tool use is not its strength.
- **Reasoning: 48/100.** GPQA 68.0% and AIME25 38% show usable breadth, but HLE 4.2%, CritPt 0% and LCR 36% cap the depth.
- **Context window: 72/100.** 256K total, just above the 200K = 70 anchor.
- **Multimodal: 61/100.** Image input verified (MMMU-Pro 55.7%); no audio, video or PDF input.
- **Coding: 42/100.** LiveCodeBench 46.5% and SciCode 36.6% — a competent but dated coding profile with no repo-level benchmark.
- **Cost efficiency: 88/100.** $0.50/$1.50 per 1M with $0.05 cache reads is reasonable for a 675B model, and the Apache-2.0 weights permit free self-hosting; the output rate and retirement keep it out of the top band.
- **Overall Score: 52/100.** (38 + 48 + 72 + 61 + 42) / 5 = 52.2 → 52. Best fit: legacy deployments and open-weight on-prem inference that already standardized on the Mistral 3 API surface; new work should move to Mistral Large 4 preview.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-11
- Method: public web research (Artificial Analysis model page and API data, Mistral AI model/weights listing on Hugging Face, Apache 2.0 license record); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Mistral Large 3](https://artificialanalysis.ai/models/mistral-large-3)
  - [Hugging Face — mistralai/Mistral-Large-3-675B-Instruct-2512](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512)
  - [Mistral AI — models and pricing](https://mistral.ai/pricing)
- Future sources: add a new file next to this one, e.g. `Mistral_Large_3_Update.md`, using the same headings.
