# Ling 3.1 Flash — findings by GLM 5.3

- Source: InclusionAI (`opencode/ling-3.1-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash (Zen Free tier: "Ling 3.1 Flash Free")
- **Short description:** InclusionAI's hybrid reasoning language model for coding, multi-step analysis, and tool-using agents; the successor to Ling 3.0 Flash, launched 2026-09-30.
- **Provider / access:** OpenCode Zen `opencode/ling-3.1-flash` (Free tier `ling-3.1-flash-free` on the Chat Completions-compatible endpoint); also routable via Vercel AI Gateway as `inclusionai/ling-3.1-flash` (provider: Novita).
- **Release / knowledge:** launched 2026-09-30 (official launch screenshots via @AntLingAGI, tracked by BenchLM); knowledge cutoff not published.
- **IDs:** `opencode/ling-3.1-flash` (limited-time Free ID: `opencode/ling-3.1-flash-free`); `inclusionai/ling-3.1-flash` (Vercel/Novita).
- **Context window:** 262,144 tokens total; 32,768 max output — verified by both BenchLM model details and the Vercel AI Gateway model card.
- **Modalities:** text in / text out (Vercel card: "long-context text workflows"; no image/video/audio input listed); reasoning yes (hybrid reasoning, BenchLM "Reasoning" type); tool-using agent support stated by design.
- **Pricing (as of 2026-10-02):** Free $0 in / $0 out on OpenCode Zen for a limited time (during the free period collected data may be used to improve the model — Zen privacy note); Novita per-token pricing on Vercel not yet published in the listing.
- **Architecture:** 560B total parameters / 25B activated (MoE) per the Vercel AI Gateway model card; open-weights status not verified (no accessible public HF model card found).

### Raw benchmarks found

> All measured rows are vendor launch numbers (official @AntLingAGI launch screenshots, 2026-09-30) tracked by BenchLM with source links; BenchLM keeps the model unranked (8 of 645 rows, no composite).

Agent / tool use:

- skillsBench: **68.7%** (Ant Ling launch screenshots via BenchLM)
- AutomationBench: **52.5%** (Ant Ling launch screenshots via BenchLM)
- CyberGym: **87.9%** (Ant Ling launch screenshots via BenchLM)
- Finance Agent v2: **57.9%** (Ant Ling launch screenshots via BenchLM)
- DRACO: **85.5%** (Ant Ling launch screenshots via BenchLM)
- Terminal-Bench 2.1: no verified public score found (see Terminal-Bench 4 row under Coding)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- HealthBench Professional: **65.3%** (Ant Ling launch screenshots via BenchLM)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no composite assigned (unranked)

Coding:

- Terminal-Bench 4: **40.4%** (Ant Ling launch screenshots via BenchLM)
- SWE-Atlas Codebase QnA: **55.9%** (Ant Ling launch screenshots via BenchLM)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 262K window verified (BenchLM, Vercel model card); no MRCR / RULER / GraphWalks retrieval score found — no long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 65/100.** Five agentic launch rows land mid-to-strong: skillsBench 68.7%, AutomationBench 52.5%, Finance Agent v2 57.9%, CyberGym 87.9%, DRACO 85.5% — solid breadth for a Flash-tier agentic model, but vendor-reported and missing Terminal-Bench 2.1 / Tau / GDPval anchors, which caps it.
- **Reasoning: 58/100.** Hybrid-reasoning design with one knowledge row (HealthBench Professional 65.3%); zero GPQA / HLE / Index rows publicly — capped by thin verified reasoning evidence.
- **Context window: 70/100.** 262,144 tokens verified by two sources — 200K–500K tier (200K anchor = 70); 32K max output noted as caveat; no retrieval-quality scores.
- **Multimodal: 15/100.** Text-only workflows per the Vercel model card (the separate Ling 3.0 Flash VL carried vision; no 3.1 vision variant verified) — text-only convention.
- **Coding: 60/100.** Terminal-Bench 4 at 40.4% is weak-to-mid and SWE-Atlas Codebase QnA 55.9% is mid — a usable but unproven coding tier; no SWE-bench Verified / LiveCodeBench rows cap it.
- **Cost efficiency: 100/100.** $0 in / $0 out on Zen's limited-time Free tier; caveat: during the free period collected data may be used to improve the model — not for confidential code. Novita paid pricing not yet published.
- **Overall Score: 54/100.** Half-up mean of the five quality dims: (65 + 58 + 70 + 15 + 60) / 5 = 53.6 → 54. Free-tier agentic text model with solid cyber/tool breadth and a 262K window; wait for independent SWE-bench / GPQA rows before trusting it for hard coding or deep reasoning.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-02
- Method: public internet research (BenchLM tracker rows sourced to the official launch screenshots, Vercel AI Gateway model card, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
