# MiMo V2.6 Flash Free — findings by GLM 5.3

- Source: Xiaomi (`opencode/mimo-v2.6-flash-free`, base `xiaomi/mimo-v2.6-flash`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash Free (Zen free tier of Xiaomi MiMo-V2.6-Flash)
- **Short description:** OpenCode Zen's limited-time free tier of Xiaomi's MiMo-V2.6-Flash-RL — an omnimodal (text/image/video/audio) sparse-MoE RL model built for long-horizon agents. Top use case: free agentic coding, tool use, and cybersecurity tasks.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.6-flash-free` (OpenAI-compatible Chat Completions); open weights `XiaomiMiMo/MiMo-V2.6-Flash-RL` on Hugging Face/ModelScope (MIT); also on Xiaomi MiMo Open Platform API and OpenRouter.
- **Release / knowledge:** MiMo-V2.6 series current as of 2026-09 (HF collection updated days before 2026-09-25); knowledge cutoff not stated publicly.
- **IDs:** `opencode/mimo-v2.6-flash-free` (Free tier, limited time); base `XiaomiMiMo/MiMo-V2.6-Flash-RL`.
- **Context window:** Zen free tier caps at 200K context / 32K output (models.dev `mimo-v2.6-flash-free.toml`); native model supports 1M (HF model card). Scored on the evaluated Zen tier (200K), mirroring the V2.5 Free precedent.
- **Modalities:** text, image, video, and audio in / text out (HF model card "Native Omnimodal"); reasoning yes (interleaved `reasoning_content` field; BenchLM lists Reasoning type); tool calls yes (`--tool-call-parser mimo` in official serving recipes); JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** Free tier — $0 in / $0 out / $0 cached read (models.dev + Zen pricing table). Caveat: during the free period collected data may be used to improve the model (Zen privacy note) — do not route confidential code.
- **Architecture:** sparse MoE, 309B total / 15B activated parameters; 48 layers (39 SWA / 9 global attention); 256 routed experts (8 activated); 681M MiMo ViT vision encoder; 308M AudioTokenizer + 127M audio patch encoder; 5-layer MTP speculative decoder; MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (BenchLM + HF vendor table + HF eval-results widget; near the frontier 88%+ reference; Opus 5 89.1%, GPT-5.6 Sol 88.8% in the same table)
- Terminal-Bench 4.0: **28.8%** (BenchLM + HF vendor table; Opus 5 49.0%, GPT-5.6 Sol 39.9%)
- Toolathlon-Verified: **73.6%** (BenchLM + HF vendor table; Opus 5 80.6%)
- AutomationBench v1.0.6: **52.3%** (BenchLM + HF vendor table; beats Opus 5's 50.3%)
- OSWorld-Verified (computer use): **80.8%** (BenchLM + HF vendor table)
- JobBench: **61.2%** (BenchLM + HF vendor table)
- Agents' Last Exam: **27.6%** (BenchLM + HF vendor table; Opus 5 31.6%)
- GDPval-AA 2.1: **no verified public score found** for Flash (Pro sibling: 1673)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Cybersecurity (tool-adjacent):

- CyberGym: **95.1%**, MiMo Cyber Bench **77.2%**, ExploitGym **6.0%**, ExploitBench **25.3%**, SEC Bench Pro **47.5%** (HF vendor table / BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (BenchLM page exists but unranked, "Coming soon")
- Omniscience: **no verified public score found**

Coding:

- DeepSWE v1.1: **67.9%** (BenchLM + HF vendor table + HF eval-results widget; frontier ref 74%+; Pro sibling 71.9, Opus 5 74.0)
- MiMo Code Bench: **61.2%** (HF vendor table; Opus 5 68.6)
- ProgramBench: **26.0%** (BenchLM + HF vendor table; weak — Opus 5 37.0)
- SWE-bench Verified / LiveCodeBench / SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- Native 1M claimed (HF model card) but the evaluated Zen tier caps at 200K; no MRCR/RULER/GraphWalks value published — no long-context retrieval score found.

Multimodal:

- MiMo VisualCoding: **71.5%** (HF vendor table; beats Opus 5's 70.0)

### Normalized scores (1–100)

- **Tool use: 87/100.** TB 2.1 87.6% is at the frontier line, Toolathlon 73.6%, OSWorld 80.8%, AutomationBench 52.3% (beating Opus 5) plus elite CyberGym 95.1%; capped below the top by TB 4.0 28.8%, Agents' Last Exam 27.6% and missing GDPval/Tau3 numbers.
- **Reasoning: 62/100.** No direct GPQA/HLE/LCR numbers exist (provisional score); indirect evidence is mixed — Agents' Last Exam 27.6% is respectable, ProgramBench 26.0% weak, MiMo Code/JobBench solid.
- **Context window: 70/100.** Evaluated Zen free tier = 200K/32K cap (200K anchor = 70); native 1M exists but is not what the free tier serves and has no retrieval data.
- **Multimodal: 92/100.** Native omni input (text/image/video/audio → top tier) with text out; MiMo VisualCoding 71.5% verifies agentic vision; no non-text output and no independent vision-benchmark rows keep it just under 95.
- **Coding: 72/100.** DeepSWE 67.9% is near-frontier for an open model and TB 2.1 87.6% elite, but ProgramBench 26.0% is weak and SWE-bench Verified/LiveCodeBench/SciCode are all missing.
- **Cost efficiency: 100/100.** $0 in / $0 out free tier = 100 by the methodology; flagged: time-limited and data may be used for model improvement — not for confidential workloads.
- **Overall Score: 77/100.** Half-up mean of the five quality dims (87+62+70+92+72)/5 = 76.6 → 77 — the best free agentic-value pick found: near-frontier tool use and omni input at $0, with reasoning evidence still thin.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (BenchLM MiMo-V2.6-Flash page, Hugging Face MiMo-V2.6-Flash-RL model card and vendor benchmark table, models.dev Zen registry, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores. Replaces the 2026-09-24 `.md.excluded` twin: new verified evidence (BenchLM coverage + HF model card) appeared on 2026-09-25.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
