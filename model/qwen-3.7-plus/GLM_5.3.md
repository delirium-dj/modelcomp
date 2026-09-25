# Qwen 3.7 Plus — findings by GLM 5.3

- Source: Alibaba Qwen, served on OpenCode Zen (`qwen3.7-plus`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's Qwen3.7 "Plus"-tier cloud model (reasoning + VL capable natively), as evaluated via its OpenCode Zen serving: a text-only 128K coding/agent endpoint. Native Qwen3.7-Plus understands images and videos; this deployment exposes text in/out.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.7-plus` (docs list `qwen3.7-plus`), Anthropic-style Messages endpoint `https://opencode.ai/zen/v1/messages`; also available via Qwen Cloud natively.
- **Release / knowledge:** Qwen3.7 series predates Qwen3.8 (Aug 2026); exact release date and cutoff not stated in sources found.
- **IDs:** `opencode/qwen-3.7-plus` (meta) / `qwen3.7-plus` (Zen docs table). No Zen Free ID.
- **Context window:** 128K total on the evaluated Zen endpoint (meta.json). Native model context not verified in sources found.
- **Modalities:** Text in / text out on the evaluated endpoint (meta.json); native Qwen3.7-Plus posts image/video benchmark results (official Qwen3.8-27B comparison tables) — not exposed here. Thinking/reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-25):** Zen: $0.40 / 1M input, $1.60 / 1M output, $0.04 cached read, $0.50 cached write.
- **Architecture:** Proprietary (closed) Plus-tier Qwen; parameters undisclosed.

### Raw benchmarks found

> All Qwen3.7-Plus figures below are official Alibaba numbers from the Qwen3.8-27B Hugging Face model-card comparison tables (Aug 2026), measured on the native model.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus): **64.0%** (official Qwen3.8 card comparison)
- OSWorld-Verified (**computer use**): **73.3** (official VL table)
- AndroidWorld (**mobile use**): **81.0** (official)
- WebArena-Verified (**browser use**): **55.3** (official)
- ClawEval-MM: **Pass@3 42.6 / Average 50.4** (official)
- CoWorkBench (**long-horizon office work**): **65.1** (official)
- JobBench (**professional job tasks**): **27.6** (official)
- Agents' Last Exam: **Pass@1 13.2 / Score 33.6** (official)
- RecreationBench: **30.2** (official)
- Tau3-Banking / Tau2-Bench / GDPval-AA / AutomationBench / MCP-Atlas / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.3%** (official card; vs Qwen3.8-27B 89.2, Opus 4.6 Max 91.3)
- HLE: **34.7%** (official, GPT-4o judge; vs Opus 4.6 Max 40.0)
- IFBench: **79.1** (official)
- AA Intelligence Index / LCR / MLCR / CritPt / Omniscience: no verified public score found

Coding:

- LiveCodeBench v6: **89.6%** (official; vs Qwen3.8-27B 90.3, Opus 4.6 Max 88.8)
- SWE-bench Pro: **57.6%** (official, Claude Code harness)
- QwenSWEBench (in-house): **59.2** avg@3 (official)
- DeepSWE 1.1: **14.2%** (official)
- NL2Repo-Bench: **41.1** (official)
- SWE-MM: **30.0** (official)
- SWE-bench Verified / SciCode / Vibe Code Bench: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks value found; evaluated endpoint capped at 128K.

### Normalized scores (1–100)

> Derived per `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 78/100.** AndroidWorld 81.0 and OSWorld 73.3 are strong; TB 2.1 64.0% and CoWorkBench 65.1 sit upper-mid; capped by JobBench 27.6, Agents' Last Exam 13.2 and ClawEval-MM 42.6, and no GDPval-AA/Tau3 point values.
- **Reasoning: 84/100.** GPQA Diamond 90.3% clears the 90%+ frontier ref; HLE 34.7% is upper-mid (frontier 40%+); no AA Index / LCR / CritPt values found to confirm further.
- **Context window: 56/100.** Evaluated Zen endpoint serves 128K total (100K–200K tier = 50–64); native model window unverified.
- **Multimodal: 15/100.** The evaluated endpoint is text in/out (meta.json) — text-only tier, despite strong native VL results (MathVision 85.1/90.3, OmniDocBench 91.4) that this deployment does not expose.
- **Coding: 80/100.** LiveCodeBench v6 89.6% is frontier-class and SWE-bench Pro 57.6% solid; DeepSWE 1.1 14.2% is weak and no SWE-bench Verified number found.
- **Cost efficiency: 94/100.** $0.40/$1.60 per 1M (cached read $0.04) undercuts the ~$0.60/$2.20 (~92) anchor; no free tier.
- **Overall Score: 63/100.** (78 + 84 + 56 + 15 + 80) / 5 = 62.6. Best-fit recommendation: value text-only coding/agent endpoint on Zen; if you need the native model's vision or longer context, use Qwen Cloud directly instead.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (official Qwen3.8-27B Hugging Face card comparison tables, OpenCode Zen docs + models endpoint, meta.json serving facts); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
