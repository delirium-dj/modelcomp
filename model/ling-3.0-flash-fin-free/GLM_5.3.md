# Ling 3.0 Flash Fin Free — findings by GLM 5.3

- Source: Ant Group inclusionAI (`opencode/ling-3.0-flash-fin-free`, base `inclusionai/Ling-3.0-flash-Fin`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin Free
- **Short description:** The free OpenCode Zen tier of Ling-3.0-flash-Fin — Ant Group's first finance-enhanced Ling model (124B/5.1B MoE, MIT open weights) for end-to-end financial research: retrieval, evidence review, valuation modeling, and report preparation. Top use case: zero-cost finance-domain agent workflows.
- **Provider / access:** OpenCode Zen `opencode/ling-3.0-flash-fin-free` (OpenAI-compatible Chat Completions; $0 limited-time tier); open weights `inclusionAI/Ling-3.0-flash-Fin` on Hugging Face (MIT, BF16); OpenRouter `inclusionai/ling-3.0-flash-fin:free`.
- **Release / knowledge:** Ling-3.0 Fin collection updated ~15 days before 2026-09-25 (HF); knowledge cutoff not stated publicly.
- **IDs:** `opencode/ling-3.0-flash-fin-free` (free limited-time tier).
- **Context window:** 262K total / 32K out on the evaluated free tier (curated metadata; native model 256K per HF card, extended-context variants exist).
- **Modalities:** text in / text out (text-only); reasoning yes (thinking mode enabled by default; `temperature=1.0, top_p=0.95, top_k=20` recommended); tool calls yes (agent/tool-use tags on HF card); structured outputs not supported on the Zen tier (models.dev registry).
- **Pricing (as of 2026-09-25):** Free — $0 in / $0 out / $0 cached read (models.dev registry + Zen pricing table). Caveat: during the free period, collected data may be used to improve the model (Zen privacy note) — not for confidential data.
- **Architecture:** open-weights MoE (`bailing_hybrid`), 124B total / 5.1B active; continued training of Ling-3.0-flash on high-quality financial data; SGLang/vLLM compatible.

### Raw benchmarks found

> Note: the Fin variant's own eval results (FinFIRST, FinSearchComp Verified, FinCRAFT, Finance Agent, APEX-Agents, SpreadsheetBench, τ³-Banking) are published on the HF model card as an image only — not text-verifiable in this research. The verified numbers below are for the **base model Ling-3.0-flash** (BenchLM), used as the closest proxy; the Fin variant adds finance-domain training on the same architecture.

Agent / tool use (base-model proxy):

- Terminal-Bench 2.1: **57.0%** (BenchLM Ling-3.0-flash; Vals variant 50.2%)
- MCP Atlas: **65.5%** (BenchLM); BFCL v4 **73.0%** (BenchLM)
- AA Tau3-Banking: **28.0%** (BenchLM); GDPval-AA **1107 Elo** (BenchLM)
- WideResearch **73.6%**, BrowseComp **72.2%**, DRACO **70.4%**, skillsBench **44.8%**, AA Agentic Index **21.0%** (BenchLM)
- Claw-Eval / Toolathlon: **no verified public score found**

Reasoning / knowledge (base-model proxy):

- GPQA Diamond: **85.0%** (BenchLM; AA-GPQA 85.5%, Vals 84.8%)
- HLE: **22.7%** (BenchLM; AA-HLE 23.7% — well below the 40% frontier line)
- AA-LCR **73.0%**, CritPt **1.7%** (BenchLM)
- AIME26 **93.2%**, HMMT Feb 2026 **87.0%**, IMOAnswerBench **83.7%** (BenchLM)
- Artificial Analysis Intelligence Index: **24.9** (BenchLM)
- Omniscience: Index **-17.9**, Accuracy **18.2%**, hallucination-rate field **44.1%** (BenchLM; label ambiguous vs AA's "Non-Hallucination Rate" — flagged, not double-counted)
- MMLU-Pro (Vals) **82.0%**, IFBench **74.5%** (BenchLM)

Coding (base-model proxy):

- SWE-bench (Vals): **65.2%** (BenchLM); SWE-bench Pro **56.6%** (BenchLM)
- LiveCodeBench v5: **82.8%** (BenchLM); LiveCodeBench (Vals) **84.0%** (BenchLM)
- SWE Multilingual **72.4%**, SciCode **41.2%** / AA-SciCode **42.0%** / AA Coding Index **50.6%** (BenchLM)
- Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- AA-LCR 73.0% (BenchLM, base proxy) at the 262K window; no MRCR/RULER per-length data — no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 62/100.** Base-model proxy: MCP Atlas 65.5%, BFCL 73%, BrowseComp 72.2% and TB 2.1 57% are mid-band with GDPval-AA 1107 mid; the Fin variant's tool-intensive finance focus (vendor eval image, not text-verifiable) is directionally positive but uncounted.
- **Reasoning: 62/100.** GPQA 85% and AIME26 93.2% are solid, but HLE 22.7%, CritPt 1.7% and a -17.9 Omniscience Index (weak knowledge reliability) hold it mid-band.
- **Context window: 72/100.** 262K on the evaluated free tier (200K–500K band); AA-LCR 73% moderate.
- **Multimodal: 15/100.** Text in/out only (per template: 15 if text-only).
- **Coding: 62/100.** LiveCodeBench 82.8–84% is good and SWE Multilingual 72.4% decent; SWE-bench (Vals) 65.2%, SWE Pro 56.6% and AA Coding Index 50.6% are mid.
- **Cost efficiency: 100/100.** $0 in/out free tier (limited time) with MIT open weights for self-hosting; flagged: free-period data may be used for model improvement.
- **Overall Score: 55/100.** Half-up mean of the five quality dims (62+62+72+15+62)/5 = 54.6 — a niche free pick for finance + efficient execution; general-purpose strength is mid-tier and the text-only I/O plus weak knowledge reliability are the limits.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (Hugging Face Ling-3.0-flash-Fin model card, BenchLM base-model page, models.dev Zen registry, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores. Base-model benchmark proxy flagged above.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
