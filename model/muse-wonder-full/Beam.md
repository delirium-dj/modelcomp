# Muse Wonder Full — findings by Beam

- Source: Meta / Muse Wonder Full (muse-wonder-full)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta Superintelligence Labs' top proprietary frontier model (released 2026-10-12), built for long-running professional agents, software engineering, computer use, and multimodal reasoning; available only via Muse Code Power/Maximum subscription plans (not per-token API).
- **Provider / access:** Meta Model API / Muse Code (subscription-only for Full); OpenAI-compatible base URL; Chat Completions. No public per-token pricing for Full.
- **Release / knowledge:** 2026-10-12; knowledge cutoff not disclosed.
- **IDs:** `muse-wonder-full` (Muse Code); Meta Model API variant is `muse-wonder-1.0` for the base Muse Wonder (not Full).
- **Context window:** 1,048,576 tokens total; max output not separately published (verified via Meta docs/model card).
- **Modalities:** text, image, video, audio (and PDF) in; text out; reasoning yes (minimal→max); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-29):** Muse Wonder Full is subscription-only (Muse Code Power/Maximum plans, ~$50/mo entry reported); base Muse Wonder is $4/$0.20-cached/$20 per 1M in/out. No per-token price for Full.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- AutomationBench-AA: **71%** (AA, #3)
- OSWorld V2.1 (computer use): **78.4%** (Meta model card)
- JobBench (professional tool use): **75.3** (Meta model card)
- GDPval-AA v2.1: **1857 Elo** (AA, #2)
- AA-Briefcase v1.1: **1729 Elo** (AA, #3)
- GDP.pdf: **33%** (AA, #1)
- Harvey LAB (legal agent): **13.1** (Meta model card)
- Vals Finance Agent V2: reported leader (Meta model card; exact number not captured)
- CyberGym: **88.4%**; ExploitBench **58.9%**; ExploitGym **20 intended flags** (Meta model card, updated 2026-10-23)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3: **56** (AA, max effort; v5.0 page shows 50 — version delta, not a discrepancy in measured tasks)
- AA-LCR: **83.7%**
- MLCR-AA: **22.2%**
- CritPt: **32.9%** (AA, #1)
- AA-HLE: **53.6%**
- AA-Omniscience Index: **30.6**; Accuracy **41.0%**; Hallucination rate **17.6%**
- HealthBench Pro: **65.6**
- Personal Superintelligence Index: **59.1** (Meta internal composite)

Coding:

- DeepSWE 1.1: **79.0%**
- SWE-Marathon: **57.5%**
- AA-SciCode: **62.6%**
- AA Coding Agents Index (Muse Code, max): **68** (tied with Claude Code + Sonnet 5.5)

Long context:

- MemoryBench: **85.5** (Meta model card)
- 1M-token context; no separate MRCR/RULER number published beyond AA-LCR 83.7%

### Normalized scores (1–100)

- **Tool use: 93/100.** Strong agentic/computer-use and professional-work numbers (AutomationBench 71%, OSWorld 78.4%, GDPval-AA 1857 Elo, AA-Briefcase 1729 Elo, GDP.pdf 33% #1); capped slightly below 95 because no published Terminal-Bench 2.1/Tau3-Banking score for Full.
- **Reasoning: 90/100.** AA Intelligence Index 56 (v4.3) with CritPt #1 (32.9%), HLE 53.6%, LCR 83.7%, and low hallucination (17.6%); capped by modest AA-Omniscience (30.6) and knowledge-heavy evals.
- **Context window: 100/100.** 1M-token window with strong long-context retrieval (AA-LCR 83.7%, MemoryBench 85.5).
- **Multimodal: 95/100.** Text/image/video/audio (and PDF) input with text output; no non-text output.
- **Coding: 92/100.** DeepSWE 79.0%, SWE-Marathon 57.5%, SciCode 62.6%, Coding Agents Index 68; capped by absence of a published SWE-bench Verified number.
- **Cost efficiency: 55/100.** Subscription-only access (~$50/mo entry reported) with no per-token price; cost per task not measurable on AA; scored as paid premium tier.
- **Overall Score: 94/100.** (93+90+100+95+92)/5 = 94; best fit for long-horizon agentic coding and professional knowledge work when subscription access is available.

---

## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-10-29
- Method: public internet research (Meta model card, Artificial Analysis, independent reviews); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
