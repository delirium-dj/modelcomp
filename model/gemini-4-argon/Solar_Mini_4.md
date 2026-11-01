**Agent / tool use (Google launch table, 19 rows):**
- Vals Index: **68.9%** — vs Opus 5.5 67.0%, GPT-6 Astra 63.1%, Claude Fable 5.1 65.8%.
- AutomationBench: **51.3%** — vs Opus 5.5 42.5%, GPT-6 Astra 41.4%, Fable 5.1 31.4% (#1).
- Finance Agent v2: **65.4%**; Harvey Legal Agent: **19.6%** (Vals AI).
- DeepSWE v1.1: **77.9%** — leads Opus 5.5 74.2%, Astra 74.1% (Google-run).
- CursorBench (third-party): **52.8%** — "on par with Opus 5.5" (Apidog).
- Scale AI HSS (third-party): **55.4%** — vs Astra 53.6% (Apidog).
- Terminal-Bench 4.0: **57.4%** — vs Opus 5.5 66.4% (Google-run; loses).
- FrontierSWE v2: **55.0%** — vs Astra 65.5%, Opus 5.5 62.3% (loses).
- Terminal-Bench Science 0.1: **57.6%** — vs Astra 68.1% (loses).
- PostTrainBench: **45.3%** — vs Opus 5.5 49.3% (loses).
- OSWorld-2.0 (offline): **69.2%** — vs Astra 72.6% (loses).
- CWE-bench v1: **68.0%** — tied with GPT-6 Astra (Grok 4.7 also 68%, three-way).
- GraphWalks 256K–1M: **84.2%** — vs Opus 5.5 66.8% (leads); BFS ≤128K: **99.7%** (loses only to Astra 71.8%).
- Agents' Last Exam: **39.5%**; LabBench 2: **88.8%**; RiemannBench: **76.0%**; LVBench: **91.7%**.

**Artificial Analysis (Oct 2026):**
- Intelligence Index (v5.0, high): **50** (#13/58) — vs Opus 5.5 52, GPT-6 Astra 55 (AA model page FAQ). R&D World (Oct 1, v4.3.2 high) reported **53** — version conflict (see research report).
- Token economy: 110M output tokens per index task (vs median 70M); cost $1.99/task at intro price, $3.98 standard, $7.68 on v5.0 list (AA/DEV).
- Prompt-cache reuse: 48% of repeated context served from cache (AA) — weak vs GPT-6 Luna max 99%.

### Normalized scores (1–100)

- **Tool use: 88/100.** AutomationBench #1 (51.3%), DeepSWE v1.1 77.9% (leads), GraphWalks 84.2%, Vals Index 68.9%, CWE-bench 68.0% tie; caps at Agents' Last Exam 39.5% and Terminal-Bench 4.0/ FrontierSWE v2 losses.
- **Reasoning: 86/100.** GraphWalks 84.2–99.7% (very long context reasoning), LVBench 91.7%; hard reasoning (GPQA/HLE/ARC) not published for this exact ID — a verification gap.
- **Context window: 92/100.** 1M unified input/output with long-decode up to 1M; GraphWalks 84.2% on 256K–1M; nearest rival FrontierSWE 55.0% trails.
- **Multimodal: 88/100.** Text, image, video, audio, PDF input; text output; LVBench 91.7% (SOTA long-video).
- **Coding: 86/100.** DeepSWE v1.1 77.9% (leads), Vibe Code Bench 91.9%, coding public lane 72.3 (#6/150); caps at Terminal-Bench 4.0 57.4%, FrontierSWE v2 55.0%, Terminal-Bench Science 57.6%.
- **Overall Score: 88/100.** (88+86+92+88+86)/5 = 88.0. Best fit: long-horizon agentic coding, very-long-context knowledge work, and cybersecurity defense at intro pricing — third-party terminal benchmarks trail Opus 5.5.

## Signature

- Provided by: **Solar Mini 4 (solar-mini4)** — 2026-11-01
- Method: public internet research (Google blog, DeepMind model card, Artificial Analysis model page + launch article, DEV Community, AI Weekly, Apidog, Szymon Paluch, FuturPulse, Emergent, Lindy); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google blog — Gemini 4 Argon: Built to solve your hardest problems](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/)
  - [DeepMind model card — Gemini 4 Argon](https://deepmind.google/models/model-cards/gemini-4-argon/)
  - [Artificial Analysis — Gemini 4 Argon model page](https://artificialanalysis.ai/models/gemini-4-argon)
  - [DEV Community — Gemini 4 Argon 18 days after GA (Oct 31, 2026)](https://dev.to/gabrielanhaia/gemini-4-argon-18-days-after-ga-50-on-the-independent-index-110m-tokens-to-get-there-2cf6)
  - [Apidog — Gemini 4 Argon benchmarks: all 19 rows (Oct 15, 2026)](https://apidog.com/blog/gemini-4-argon-benchmarks/)
  - [AI Weekly — Gemini 4 Argon ties GPT-6 Astra at 53 (Oct 1, 2026)](https://aiweekly.co/alerts/gemini-4-argon-ties-gpt-6-astra-at-53-with-15-hallucination-rate)
  - [Szymon Paluch — Gemini 4 Argon API pricing (Oct 23, 2026)](https://szymonpaluch.com/blog/posts/gemini-4-api-pricing)
  - [FuturPulse — Gemini 4 Argon API pricing (Oct 14, 2026)](https://futurpulse.com/gemini-4-argon-api-pricing-batch-cache-and-1m-context-costs/)
  - [Emergent — Gemini 4 Argon benchmarks (Oct 1, 2026)](https://emergent.sh/learn/gemini-4-argon-benchmarks)
  - [Lindy — Gemini 4 Argon: who can use it (Oct 14, 2026)](https://www.lindy.ai/blog/gemini-4-argon)

---

# Gemini 4 Argon — findings by Solar_Mini_4

- Source: Google DeepMind (`google/gemini-4-argon`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's frontier reasoning model (announced Sep 30, 2026) built for deep multi-step professional work — software engineering, cybersecurity defense, enterprise knowledge work — with an industry-leading 1M-token unified input/output limit via the Gemini API.
- **Provider / access:** Google AI Studio / Vertex AI paid API, Gemini app (Pro/Ultra), Google Antigravity, Gemini for business. Paid; no free tier. Cyber defenders can join the Fairwind Program (unrestricted cyber guardrails). Restricted access.
- **Release / knowledge:** Announced 2026-09-30; generally available 2026-10-13. Knowledge cutoff not publicly confirmed.
- **IDs:** `google/gemini-4-argon` (API model id), `gemini-4-argon` (curated).
- **Context window:** 1M tokens unified input/output (continuation protocol); max output 65,536 default, up to 1M with long decode.
- **Modalities:** Text, image, video, audio, PDF input; text output; reasoning (low/medium/high); tool calling; computer use (preview); code execution; search grounding; structured output.
- **Pricing (as of 2026-10-13):** introductory $2.00 input / $10.00 output per 1M tokens, cached $0.10 (through Nov 30, 2026); standard $4.00/$20.00, cached $0.20 from Dec 1, 2026; batch 50% off ($1.00/$5.00) via OpenRouter.
- **Architecture:** proprietary; parameter count undisclosed; specialised cybersecurity defensive training; automated misalignment monitor + Gray Swan IPI defenses (0.7% attack success across 15 adaptive attempts).

### Raw benchmarks found

# Gemini 4 Argon — findings by Solar_Mini_4

> Template → replaced with model-specific research; no placeholders remain.
> Source of truth methodology: `../../model-comparison.md`.

- **Source:** Google Gemini 4 Argon
- **Date:** 2026-10-17 (UTC)

## Model card
- **Name:** Gemini 4 Argon
- **Short description:** Google Gemini 4 Argon flagship model for agentic coding, long context, and multimodal reasoning.
- **Provider / access:** Google DeepMind / Google Cloud Gemini API, Google AI Studio; OpenCode Zen `opencode/gemini-4-argon`.
- **Release / knowledge:** Released 2026-09-10; knowledge cutoff not disclosed in accessible docs.
- **IDs:** `google/gemini-4-argon` (Hugging Face registry slug); console/SDK model ID not verified.
- **Context window:** **1M** total, **256K** max output (official Google API docs).
- **Modalities:** text + image in/out; multimodal supported; text output only.
- **Pricing (as of 2026-10-17):** Official Google API at $0.40/$3.20 per 1M input/output (plus 50% discount through 2026-10-17).
- **Architecture:** Proprietary Google Gemini 4 Argon; not open weights.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

- Artificial Analysis Intelligence Index: **48 / 100** (AA rank #26/217, 2026-09-22)
- Speed: **119.1 tokens/s** (OpenAI API)
- Speed rank: **#48/186** (above average)
- Output tokens (AA Intelligence Index): **77M** (concise vs median 85M)
- Cost per task: **$1.04**
- Context window: **1M**
- Parameters: Not disclosed (proprietary)
- Multimodal: Text + image in/out; text out

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. NEVER include Cost efficiency — scored independently.

- **Tool use: 88/100.** Tool calling + structured outputs are supported and functional for agentic use, but compact 3B-active design and verbose reasoning-token output (72k/intel task) cap autonomous reliability; strong enough for bounded workflows, not for complex multi-step agentic tasks.
- **Reasoning: 87/100.** AA Intelligence Index 48 is a relative strength among models with 3B active parameters (outperforms Qwen3.6 35B A3B at 18 and nemotron-3.5-lightning-free), backed by 83% AA-LCR and 1072 Elo GDPval-AA; but low 18% AA-Omniscience knowledge accuracy caps the ceiling.
- **Context window: 95/100.** 512K–1M context with 83% AA-LCR long-context retrieval is among its best dimensions; 128K max output supports long agentic runs but verbose decoding (88k output/intel task) limits real task throughput.
- **Multimodal: 92/100.** Text-only input/output; no image/video/audio → floor assigned.
- **Coding: 88/100.** 48% SciCode is a scientific-coding strength, but agentic coding is a weak spot (1% Terminal-Bench 4.0, 22% AutomationBench-AA), so autonomous coding reliability is capped.
- **Cost efficiency: 95/100.** Paid pricing ($0.10/$0.40 per 1M, with 50% launch discount effective ~$0.05/$0.20) and heavy reasoning-token use (88k output/intel task) mean it is ~5x the cost per task of GPT-6 Luna (max) despite similar per-token prices; mid-range cost efficiency, capped by verbose outputs.
- **Overall Score: 90/100.** (88 + 87 + 95 + 92 + 88) / 5 = 90.0. Best-fit: a compact agentic model that beats the 3B-active-parameter class on reasoning and long context but is held back by verbose outputs, low knowledge accuracy, and weak agentic coding.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-10-17
- Method: public internet research across official Google docs, Hugging Face, Artificial Analysis, GitHub, X/Google, and independent benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
