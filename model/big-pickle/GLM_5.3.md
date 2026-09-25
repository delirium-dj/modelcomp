# Big Pickle — findings by GLM 5.3

- Source: stealth vendor undisclosed (`opencode/big-pickle`; community-consensus identity: Zhipu GLM-4.6)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** A stealth reasoning model on OpenCode Zen (released 2025-10-17) optimized for coding agents — "deliberate analysis, multi-step problem solving, and tool use" (registry description). Community consensus (Grokipedia, OpenCode GitHub issue) identifies it as Zhipu AI's GLM-4.6 hosted under a codename. Top use case: zero-cost daily-driver coding agent.
- **Provider / access:** OpenCode Zen `opencode/big-pickle` (OpenAI-compatible Chat Completions; @ai-sdk/openai-compatible).
- **Release / knowledge:** 2025-10-17 (models.dev registry); knowledge cutoff January 2025 (registry `knowledge = "2025-01"`).
- **IDs:** `opencode/big-pickle` (Free tier — $0 limited time; stealth models can be swapped without notice).
- **Context window:** 200K total — 160K in / 32K out (models.dev registry).
- **Modalities:** text in / text out (registry `input = ["text"]`); reasoning yes (interleaved reasoning field); tool calls yes; structured outputs yes.
- **Pricing (as of 2026-09-25):** Free — $0 in / $0 out / $0 cached read (models.dev + Zen pricing table). Caveat: during the free period collected data may be used to improve the model (Zen privacy note) — not for confidential code.
- **Architecture:** not open weights (registry); consensus identity GLM-4.6 = Zhipu MoE, ~355B total / 32B active (Grokipedia, citing the GLM-4.6 architecture) — unconfirmed by the host.

### Raw benchmarks found

> Identity caveat: the host discloses nothing. Numbers below are (a) one direct community eval of `big-pickle` itself, and (b) GLM-4.6 proxy rows (BenchLM `glm-4-6`), the consensus identity. Grokipedia's "performance metrics" section additionally cites numbers that match the GLM-4.7 card (SWE-bench Verified 73.8%, HLE 42.8% with tools, MMLU-Pro 84.3%, SWE-bench Multilingual 66.7%) — identity between GLM-4.6 and 4.7 behind the codename is not fully settled; those rows are flagged, not double-counted.

Direct eval of `big-pickle`:

- SWE-Atlas Codebase QnA: **50.8% (63/124)** (direct community eval, github.com/PhillipChaffee/big-pickle-swe-atlas, cited in the repo's shared source list)

GLM-4.6 proxy (BenchLM):

- Tau2-Bench: **76.9%** (BenchLM `glm-4-6`)
- LiveCodeBench (Vals): **81.0%** (BenchLM)
- Vibe Code Bench: **3.09%** (BenchLM — weak)
- GPQA Diamond: **63.2%** (BenchLM AA-GPQA; Vals variant 74.5%)
- HLE: **5.5%** (BenchLM, AA-HLE — weak)
- AA-LCR **26.3%**, CritPt **0.0%** (BenchLM)
- MMLU-Pro (Vals) **82.2%**, AA-IFBench **36.7%** (BenchLM)
- Artificial Analysis Intelligence Index: **14.9** (BenchLM)
- Omniscience: Index **-31.7**, Accuracy **21.4%**, hallucination-rate field **67.6%** (BenchLM; label ambiguous vs AA's "Non-Hallucination Rate" — flagged, not double-counted)
- FrontierMath v2 (Tiers 1–3): **3.8%** (BenchLM)
- Terminal-Bench / GDPval-AA / Tau3 / Toolathlon: **no verified public score found for the `big-pickle` ID itself**

Long context:

- 200K window verified (registry); AA-LCR 26.3% (GLM-4.6 proxy) is weak — no reliable long-context retrieval evidence.

### Normalized scores (1–100)

- **Tool use: 50/100.** Structured outputs and tool calls are verified platform features and τ² 76.9% (proxy) is decent, but no direct TB/GDPval/Toolathlon rows exist and the direct SWE-Atlas 50.8% is mid — a serviceable free agent, not a frontier one.
- **Reasoning: 50/100.** GPQA 63.2–74.5% (proxy) is mid-band, but HLE 5.5%, AA-LCR 26.3%, CritPt 0%, a -31.7 Omniscience Index and AA Index 14.9 show a clearly dated reasoning/knowledge profile.
- **Context window: 70/100.** 200K verified (160K in / 32K out) at the 200K anchor of the 200K–500K tier.
- **Multimodal: 15/100.** Text in/out only (per template: 15 if text-only).
- **Coding: 55/100.** LiveCodeBench 81.0% (proxy) and a direct SWE-Atlas 50.8% are respectable for a free tier; Vibe Code Bench 3.09% (proxy) is near-floor.
- **Cost efficiency: 100/100.** $0 in/out free tier = 100 by the methodology; flagged: limited-time, data may be used for model improvement, and stealth models can be swapped without notice.
- **Overall Score: 48/100.** Half-up mean of the five quality dims (50+50+70+15+55)/5 = 48.0 — the established zero-cost daily driver; escalate to a current frontier model after failures or for 1M-context work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (models.dev registry, Grokipedia, BenchLM GLM-4.6 proxy, direct community eval); scores are normalized 1–100 interpretations, not official vendor scores. Identity (GLM-4.6 vs 4.7) unconfirmed by the host.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
