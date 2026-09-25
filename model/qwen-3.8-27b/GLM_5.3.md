# Qwen3.8-27B — findings by GLM 5.3

- Source: Alibaba Qwen (`Qwen/Qwen3.8-27B`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba's most capable compact open-weights generation (Aug 2026): a 27B dense vision-language model with flexible thinking control, image/video understanding, and strong long-horizon agentic coding.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-27B` (Apache-2.0); servable via vLLM, SGLang, TokenSpeed; Qwen Cloud hosted version (1M context, official built-in tools) announced "coming soon". OpenAI-compatible Chat Completions.
- **Release / knowledge:** Qwen3.8 series released August 2026 (citation in HF card); knowledge cutoff not stated.
- **IDs:** `Qwen/Qwen3.8-27B`; no OpenCode Zen Free ID found.
- **Context window:** 262,144 tokens native, extensible to 1,000,000 via YaRN RoPE scaling (HF model card; verified in config docs).
- **Modalities:** Text, image, video in; text out; thinking on by default (disable per request; reasoning_effort xhigh/medium/low); tool calls yes; structured/JSON extraction strong (ExtractBench 87.5–94.7 in HF eval results).
- **Pricing (as of 2026-09-25):** Open weights (Apache-2.0) — self-hosting free (compute only); API provider pricing varies; Qwen Cloud hosted tier not yet live.
- **Architecture:** 27B dense causal LM with vision encoder; 64 layers, hybrid Gated DeltaNet (linear attention) + Gated Attention layout; MTP multi-token prediction trained; BF16.

### Raw benchmarks found

> Official Qwen3.8-27B model-card tables (Hugging Face, Aug 2026), with in-table baselines for context.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus): **73.0%** (official card; vs Qwen3.6-27B 63.4, Qwen3.7-Plus 64.0, Muse Glimmer-30B 51.7, Opus 4.6 Max 78.2)
- OSWorld-Verified (**computer use**): **84.3** (official VL table; vs Qwen3.7-Plus 73.3, Opus 4.6 Max 72.7)
- WebArena-Verified (**browser use**): **64.8** (official)
- AndroidWorld (**mobile use**): **81.9** (official)
- RecreationBench (**app recreation**): **47.1** (official)
- ClawEval-MM (**multimodal tool use**): **Pass@3 57.4 / Average 56.9** (official)
- CoWorkBench (**long-horizon office work**): **70.7** (official)
- JobBench (**professional job tasks**): **33.4** (official)
- Agents' Last Exam (**frontier agentic**): **Pass@1 20.4 / Score 42.9** (official)
- Vision2Web: **62.9** (official)
- Tau3-Banking / Tau2-Bench / GDPval-AA / AutomationBench / MCP-Atlas / Toolathon / SWE Atlas QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (official; vs Qwen3.7-Plus 90.3, Opus 4.6 Max 91.3)
- HLE: **30.8%** (official, GPT-4o judge; vs Qwen3.7-Plus 34.7, Opus 4.6 Max 40.0)
- IFBench: **79.5** (official)
- AA Intelligence Index / LCR / MLCR / CritPt / Omniscience: no verified public score found

Coding:

- LiveCodeBench v6: **90.3%** (official; vs Opus 4.6 Max 88.8)
- SWE-bench Pro: **61.7%** (official, Claude Code harness; vs Qwen3.7-Plus 57.6, Opus 4.6 Max 53.4)
- DeepSWE 1.1: **42.2%** (official; vs Qwen3.7-Plus 14.2)
- QwenSWEBench (in-house): **79.0** avg@3 (official; vs Opus 4.6 Max 63.8)
- NL2Repo-Bench: **42.3** (official)
- SWE-MM (**multimodal SWE**): **38.6** (official)
- SWE-bench Verified / SciCode / Vibe Code Bench: no verified public score found

Multimodal (VL):

- MathVision: **90.0 w/o CI / 94.6 w/ CI** (official)
- CharXiv (RQ): **83.7 / 90.2** (official)
- OmniDocBench 1.5: **91.1** (official)
- RealWorldQA: **85.9**; BabyVision **65.7 / 85.6**; ERQA **65.5** (official)

Long context:

- 262K native / 1M via YaRN (HF config docs); no MRCR / RULER retrieval score at window length found.

### Normalized scores (1–100)

> Derived per `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 88/100.** OSWorld-Verified 84.3 (best in its table, above Opus 4.6 Max), AndroidWorld 81.9, WebArena 64.8, TB 2.1 73.0 and CoWorkBench 70.7 form an unusually complete, strong agentic profile for a 27B. Capped below 90s by JobBench 33.4 and Agents' Last Exam 20.4 (frontier agentic gap), and no GDPval-AA/Tau3 point values.
- **Reasoning: 84/100.** GPQA Diamond 89.2% sits just under the 90%+ frontier ref; HLE 30.8% is solid upper-mid (frontier 40%+); no AA Index / LCR / CritPt values found to lift or confirm further.
- **Context window: 74/100.** 262K native (200K–500K tier = 65–84); 1M only via YaRN extension — noted, not native, so scored on 262K.
- **Multimodal: 88/100.** Image + video input (video tier = 75–90) with elite VL scores (MathVision 94.6 w/CI, OmniDocBench 91.1, CharXiv 90.2 w/CI); text-only output caps below 90.
- **Coding: 86/100.** LiveCodeBench v6 90.3% beats Opus 4.6 Max (88.8); SWE-bench Pro 61.7% and TB 2.1 73.0% lead its class; DeepSWE 42.2% and NL2Repo 42.3% trail the 74%+/85%+ frontier refs, and no SWE-bench Verified number was found.
- **Cost efficiency: 88/100.** Apache-2.0 open weights: self-hosting at compute cost, dense 27B is cheap to serve, 1,229 community quantizations; no fixed $0 Zen tier, so scored on open-weights economics (slightly below the 100 free-anchor).
- **Overall Score: 84/100.** (88 + 84 + 74 + 88 + 86) / 5 = 84.0. Best-fit recommendation: best open compact agent — deploy where data control, on-prem serving, and image/video understanding matter; add YaRN only for >262K jobs.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (Hugging Face official model card with benchmark tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
