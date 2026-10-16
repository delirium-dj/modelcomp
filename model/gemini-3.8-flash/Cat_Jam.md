# Gemini 3.8 Flash — findings by Cat Jam

- Source: Google / Gemini 3.8 Flash (`opencode/gemini-3.8-flash`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's most intelligent Flash model, engineered for long-horizon software engineering, autonomous agents, and complex enterprise workflows, at Flash speed/cost.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-3.8-flash`), Vertex AI, Gemini Enterprise; Chat Completions (GenerateContent/Interactions API). Free tier available (data may be used to improve products).
- **Release / knowledge:** 2026-09-02 GA; knowledge cutoff Mar 2026 (some domains limited to Jan 2025).
- **IDs:** `gemini-3.8-flash` (Google), `gemini/gemini-3.8-flash` (LiteLLM)
- **Context window:** 1,048,576 tokens; max output 65,536 tokens. Verified via Google AI docs and model card.
- **Modalities:** Text, image, video, audio, PDF in; text out. Thinking (low/medium/high, minimal not supported); function calling, code execution, search grounding, structured output, URL context, computer use (preview). No live API.
- **Pricing (as of 2026-10-16):** Introductory through 2026-12-31: $0.75/$3.75 per 1M input/output; cached $0.075; free tier (data consent). Standard from 2027-01-01: $1.50/$7.50. Batch: $0.375/$1.875. Flex discounts available.
- **Architecture:** Proprietary transformer; adaptive reasoning (thinking levels). No open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.8%** (Google Cloud dev guide) / 89.4% (model card, AA)
- Terminal-Bench 4.0: **19.1/19.7%** (official/AA, low due to harness)
- τ³-bench Banking: **38.1%** (cloud guide) / AA 44.9%
- GDPval-AA: **1545** (Google model card) / AA 1436 Elo (high)
- AutomationBench: AA 59.9%
- OSWorld 2.0: **59.0%** (model card)
- Finance Agent v2: **61.4%** (Google DeepMind)
- AA-Briefcase: 1203 (high)
- MCP/ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE-Verified: **54.9%** (Google DeepMind) / HLE 45.4 (cloud) / AA-HLE 47.8%
- AA Intelligence Index (high): **41** (AA)
- AA-GPQA Diamond: **95.3%** (AA)
- AA-LCR v1.1: **81.3%**
- CritPt: **18.3%**
- Omniscience Accuracy / Hallucination: 54.6% / 55.2%
- AIME26 (est): ~96 (est)
- CharXiv (Multimodal): **86.2%**

Coding:

- SWE-bench Pro: **61.6%** (cloud guide) / Vals 80.0%
- SWE-Atlas: **51.9%** (cloud)
- DeepSWE v1.1: **73.8%** (leaderboard)
- Terminal-Bench 2.1: **90.8/89.4%**
- LiveCodeBench (Vals): **89.5%**
- SWE-bench (Vals): 80.0%
- AA-SciCode: **56.6%**
- FrontierSWE v2: 19.6%

Long context:

- 1M context window; output 65,536. No independent published MRCR/RULER score found in sampled data (no long-context retrieval benchmark reported in dev guide benchmark table).

### Normalized scores (1–100)

- **Tool use: 88/100.** TB 2.1 90.8, τ³ Banking 44.9, GDPval 1545, OSWorld 59, Finance Agent 61.4. Strong agentic benchmarks at Flash price. TB4.0 low and FrontierSWE 19.6 cap.
- **Reasoning: 86/100.** HLE-Verified 54.9, GPQA 95.3, LCR 81.3, AA Index 41; CritPt 18.3 and Omniscience 54/55 cap.
- **Context window: 90/100.** Verified 1M, 65,536 output. No independent retrieval score published caps near top of tier.
- **Multimodal: 90/100.** Text/image/video/audio/PDF in, text out. CharXiv 86.2, LABBench/BioMystery. Strong audio understanding (unlike Muse). Good breadth.
- **Coding: 86/100.** DeepSWE 73.8, TB2.1 90.8, LiveCodeBench Vals 89.5, SWE-Pro 61.6, SWE-Atlas 51.9. FrontierSWE 19.6 caps.
- **Cost efficiency: 96/100.** $0.75/$3.75 intro plus a genuinely free tier (data consent) — excellent Flash value. Standard pricing from Jan 2027 ($1.50/$7.50) lowers to ~90; scored on introductory free/paid route.
- **Overall Score: 88/100.** Mean of (88 + 86 + 90 + 90 + 86) / 5 = 88.0. Default workhorse for long-horizon coding/agents at Flash price.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Google DeepMind model card/docs, Google Cloud dev guide, Artificial Analysis, benchlm.ai, benchgap, vals.ai, OpenRouter/LiteLLM/pricing pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
