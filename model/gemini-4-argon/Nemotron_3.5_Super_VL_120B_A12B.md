# Gemini 4 Argon — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Google DeepMind (`deepmind.google/models/model-cards/gemini-4-argon/`), benchlm.ai, Artificial Analysis (`artificialanalysis.ai/models/gemini-4-argon`), blog.google announcement
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's Gemini 4 frontier frontier model (released 30 Sept 2026; model card published 13 Oct 2026), a natively multimodal sparse MoE reasoning model for real-world software engineering, enterprise knowledge work (legal/finance), and cybersecurity defense; 1M combined input-output context, customizable reasoning effort.
- **Provider / access:** Gemini API (`gemini-4-argon`), Google AI Studio, Vertex AI / Gemini for business, Gemini app, Google AI Mode; OpenAI-compatible not used — Google Gemini API.
- **Release / knowledge:** Released 2026-09-30; knowledge cutoff March 2026 (some domains less up to date).
- **IDs:** `gemini-4-argon` (Gemini API / Vertex). No Free ID confirmed.
- **Context window:** Combined input-output up to 1M tokens. Verified on DeepMind model card Model Information and benchlm.ai.
- **Modalities:** Text, images, audio, and video in (DeepMind card); text out; reasoning yes (explicit reasoning mode); tool use yes (agent tasks, computer use); structured output yes (per thegtmdirectory). AA lists text+image input only — a minor modality-scope discrepancy vs DeepMind's broader claim.
- **Pricing (as of 2026-10-16):** Input $2.00/1M tokens, output $10.00/1M tokens (Google API per Artificial Analysis; $2/$10 per third-party listings), cache discount 95%.
- **Architecture:** Proprietary (weights not public); large-scale sparse mixture-of-experts transformer with native multimodal support; parameter count undisclosed; reasoning model. Trained on TPUs with JAX/ML Pathways; RL from multi-step reasoning, problem-solving, theorem-proving data.

### Raw benchmarks found

Agent / tool use:

- Vals Index (Knowledge work): **68.9%** (DeepMind model card; beats GPT-6 Astra 63.1, Claude Fable 5.1 65.8, Claude Opus 5.5 67.0)
- AutomationBench: **51.3%** (DeepMind; beats GPT-6 Astra 41.4, Fable 5.1 31.4, Opus 5.5 42.5)
- Vals Finance Agent v2: **65.4%** (DeepMind)
- Harvey's Legal Agent Benchmark: **19.6%** (DeepMind)
- Agent's Last Exam pass rate: **39.5%** (DeepMind)
- OSWorld-2.0 offline partial: **69.2%** (DeepMind; Opus 5.5 leads 72.6%)
- AA AutomationBench: **77.5%** (Artificial Analysis)
- AA Briefcase Elo: **1488** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **53** (#8/217; median 27) (Artificial Analysis, independent)
- HLE (AA): **57.1%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **85.965%**; Tier 4: **78.049%** (Epoch AI)
- RiemannBench: **76.0%** (DeepMind)
- CritPt: **27.1%** (Artificial Analysis)
- AA-Omniscience Index **42.4%**; Accuracy **49.9%**; Hallucination rate **15.1%** (AA)
- LABBench 2: **88.8%** (DeepMind)

Coding:

- DeepSWE v1.1: **77.9%** (DeepMind; beats GPT-6 Astra 74.1, Fable 5.1 67.4, Opus 5.5 74.2)
- FrontierSWE v2: **55.0%** (DeepMind; GPT-6 Astra leads 65.5)
- Vibe Code Bench: **91.9%** (DeepMind; beats GPT-6 Astra 89.6, Fable/Opus 5.5 90.3)
- Terminal-bench 4.0: **57.4%** (DeepMind; Opus 5.5 leads 66.4)
- PostTrainBench: **45.3%** (DeepMind)
- AA-SciCode: **61.8%** (Artificial Analysis)

Multimodal & grounded:

- Chartography: **71.6%** (DeepMind)
- LVBench: **91.7%** (DeepMind; beats GPT-6 Astra 87.5, Fable 5.1 79.7, Opus 5.5 83.7)
- Design Arena Website: **1324** (OpenRouter)

Long context:

- GraphWalks up to 128k BFS F1: **99.7%**; GraphWalks 256k–1M BFS F1: **84.2%** (DeepMind)
- AA-LCR: **79.7%** (Artificial Analysis)
- Declared 1M combined input-output context; no public full-depth text needle-recall beyond GraphWalks.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 72/100.** Leads peers on Vals Index (68.9), AutomationBench (51.3), Finance Agent v2 (65.4), Harvey Legal (19.6); capped by weak Agent's Last Exam (39.5) and moderate OSWorld-2.0 (69.2). Strongest on knowledge-work agent tasks.
- **Reasoning: 76/100.** AA Intelligence Index 53 (#8/217), FrontierMath T1-3 85.965%, RiemannBench 76.0, HLE 57.1%; capped by CritPt (27.1), AA-Omniscience accuracy (49.9%), AA-Omniscience Index (42.4). Solid but not dominant on hard reasoning.
- **Context window: 90/100.** Verified 1M combined input-output context (DeepMind + benchlm), GraphWalks 99.7% at ≤128k and 84.2% at 256k–1M; capped because no full-depth needle recall at 1M beyond GraphWalks.
- **Multimodal: 82/100.** Text + images + audio + video in (DeepMind claim), text out; Chartography 71.6%, LVBench 91.7%; capped by text-only output and AA's narrower text+image modality listing.
- **Coding: 76/100.** DeepSWE 77.9%, Vibe Code Bench 91.9%, AA-SciCode 61.8%; capped by FrontierSWE v2 (55.0%), PostTrainBench (45.3%), Terminal-bench 4.0 (57.4%). Leads on DeepSWE/Vibe Code Bench, trails on agentic terminal coding.
- **Cost efficiency: 70/100.** $2/$10 moderate pricing with 95% cache discount; not counted toward Overall.
- **Overall Score: 79/100.** Half-up mean of (72 + 76 + 90 + 82 + 76) / 5 = 79.2 → 79. Best-fit recommendation: strong enterprise knowledge-work and cybersecurity-adjacent frontier model; leads DeepSWE/Vibe Code Bench but trails Opus 5.5 on Terminal-Bench 4.0 and GPT-6 Astra on FrontierSWE/Science.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Google DeepMind model card + benchlm.ai + Artificial Analysis independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
