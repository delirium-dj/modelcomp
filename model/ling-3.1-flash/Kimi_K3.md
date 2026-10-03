# Ling 3.1 Flash — findings by Kimi K3

- Source: InclusionAI / Ant Group (`inclusionai/ling-3.1-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash (Free preview on OpenCode Zen)
- **Short description:** InclusionAI/Ant Ling team's latest flash-tier reasoning model, successor to Ling 3.0 Flash (benchlm.ai places it in family "Ling 3.1"). Shipping as a $0 Zen Free tier for agentic/coding use.
- **Provider / access:** OpenCode Zen, `opencode/ling-3.1-flash-free` (`https://opencode.ai/zen/v1/chat/completions`). Official model card per benchlm.ai: Vercel AI Gateway listing (`vercel.com/ai-gateway/models/ling-3.1-flash`). No Hugging Face release found (hf.co/inclusionAI/Ling-3.1-flash is gated/401).
- **Release / knowledge:** launch screenshots published by Ant Ling (x.com/AntLingAGI) on 2026-09-30 (per benchlm.ai source attribution). Knowledge cutoff not disclosed.
- **IDs:** `ling-3.1-flash-free` (Zen, $0); base `inclusionai/ling-3.1-flash` (models.dev `base_model` field). No paid Zen ID; no OpenRouter listing found.
- **Context window:** 262K total (benchlm.ai model details); max output not published.
- **Modalities:** Text in/out only per Zen listing metadata; reasoning toggle on (`reasoning.enabled` true/false per models.dev toml); structured output not supported on the Zen route.
- **Pricing (as of 2026-10-02):** $0 input / $0 output / $0 cached (Zen Free tier, models.dev + Zen models endpoint). Free tier caveat: "limited time, feedback collection" pattern standard for Zen free models.
- **Architecture:** Proprietary (no weights released as of research date); params not disclosed.

### Raw benchmarks found

(benchlm.ai/models/ling-3-1-flash, last updated 2026-10-02; all rows attributed to "Ant Ling: Ling 3.1 Flash launch screenshots, September 30, 2026")

Agent / tool use:

- skillsBench: **68.7%**
- AutomationBench: **52.5%**
- CyberGym: **87.9%**
- Finance Agent v2: **57.9%**
- DRACO: **85.5%**
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon: no verified public score found.

Reasoning / knowledge:

- HealthBench Professional: **65.3%**
- GPQA Diamond / HLE / LCR / MLCR / CritPt: no verified public score found.
- Artificial Analysis Intelligence Index: not listed on AA as of 2026-10-02 — no verified public score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- Terminal-Bench 4: **40.4%**
- SWE-Atlas Codebase QnA: **55.9%**
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found.

Long context:

- No MRCR / RULER / GraphWalks retrieval numbers published — no long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 70/100.** AutomationBench 52.5% plus DRACO 85.5%, skillsBench 68.7%, Finance Agent v2 57.9% — a solid mid-band agentic profile per the methodology (Tau3-style mid refs → 50–70). Capped below the mid-70s: no Tau3 / GDPval-AA numbers published.
- **Reasoning: 60/100.** No GPQA/HLE/AA-Index public numbers — the only knowledge-flavored evidence is HealthBench Professional 65.3% and CyberGym 87.9% (specialized, not general reasoning). Provisional mid-band by default; capped by missing frontier refs.
- **Context window: 70/100.** 262K window (benchlm.ai) = methodology 200K–500K tier (65–84); no retrieval-at-depth measurement caps it near the tier floor (200K→70).
- **Multimodal: 15/100.** Text in/out only on the Zen route; the vision sibling (Ling 3.0 Flash VL) is a separate model. Methodology: text-only = 10–20.
- **Coding: 72/100.** Terminal-Bench 4 40.4% + SWE-Atlas Codebase QnA 55.9% sit comfortably in the methodology's mid band (cf. Big Pickle's SWE-Atlas 50.8% → 70), lifted by explicit coding positioning; capped by no SWE-bench Verified / LiveCodeBench numbers.
- **Cost efficiency: 100/100.** $0 in / $0 out / $0 cached on Zen (free preview tier, time-limited/feedback-collection caveat).
- **Overall Score: 57/100.** Half-up mean of (70 + 60 + 70 + 15 + 72) / 5 = 57.4 → 57. Best fit: zero-cost agentic/coding stand-in while the free tier lasts; not for vision or frontier reasoning.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-02
- Method: public internet research (opencode.ai/zen/v1/models, models.dev `ling-3.1-flash-free.toml`, benchlm.ai model page with its cited Ant Ling launch source, huggingface.co/inclusionAI, modelscope.cn); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
