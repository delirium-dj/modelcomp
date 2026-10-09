# Ring 2.6 1T — findings by Space Bunny

- Source: InclusionAI / Ant Group (`inclusionAI/Ring-2.6-1T`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Slug note:** the upstream model ID is `Ring-2.6-1T` (hyphen before `1T`, the parameter count, not a version). This repo's on-disk folder is `ring-2.6.1t`, which contains no digit-hyphen-digit join and so violates nothing under `RULES.md` slug identity; the canonical hyphen form `ring-2.6-1t` does **not** exist on disk. Research and scoring belong in this folder and were not duplicated elsewhere.

## Model card

- **Name:** Ring-2.6-1T
- **Short description:** InclusionAI's (Ant Group) **trillion-parameter flagship reasoning model**, released **2026-05-08** — the deep-reasoning sibling to Ling-2.6-1T (which is optimized instead for instant, token-efficient responses). Built by **architecturally migrating** the Ling-2.0 base rather than training from scratch, then large-scale post-training. Its explicit target is production **long-horizon agentic execution** — agent workflows, engineering development, scientific analysis, complex business systems and enterprise automation — where a model must "understand context, plan steps, invoke tools, execute continuously, and maintain stability over long-horizon tasks," not merely answer. Open weights (MIT).
- **Provider / access:** Hugging Face `inclusionAI/Ring-2.6-1T` (1T params, BF16/FP8/FP4 safetensors, 1,227 downloads last month); ModelScope (for mainland China); InclusionAI API; online demo at `ling.tbox.cn/chat`. Self-host via vLLM or SGLang (documented 4-node, tp-size 8 × pp-size 4 launch). **Not currently deployed by any Hugging Face Inference Provider** (7 open requests). No OpenCode Zen ID found.
- **Release / knowledge:** Released **2026-05-08**; technical report **arXiv:2606.15079v1, "Ling and Ring 2.6 Technical Report: Efficient and Instant Agentic Intelligence at Trillion-Parameter Scale," 13 Jun 2026**. A SWE-bench Verified evaluation result was added to the model card on 2026-05-18. **Knowledge cutoff: not disclosed.**
- **IDs:** `inclusionAI/Ring-2.6-1T` (HF), `Ring-2.6-1T` (SGLang/vLLM `model-path`)
- **Context window:** **128K native, extensible to 256K via YaRN** — stated explicitly in the official HF download table ("128K -> 256K (YaRN)"). Artificial Analysis lists the model's context as **262k**, consistent with the YaRN-extended figure. **No long-context retrieval benchmark has been published for this model.**
- **Modalities:** **Text in → text out only.** The HF repo is a `Text Generation` / `AutoModelForCausalLM` checkpoint with no vision tower; Inference Providers are listed under "Text Generation." Reasoning: yes, with an explicit **two-level Reasoning Effort mechanism — `high` and `xhigh`**. Tool calls / function calling: yes (Artificial Analysis confirms all five InclusionAI models support it).
- **Pricing (as of 2026-10-09):** **$0.30 in / $2.50 out per 1M** (44B registry, 3:1 blended $0.85); Artificial Analysis lists **$0.29 in**, blended **$0.52**, and **$4.14 per Intelligence Index task** — making it the **most expensive of the five InclusionAI models** by 11× blended price versus Ling-3.0-flash-VL at $0.05. **MIT-licensed open weights** make self-hosting free of token cost. No Free tier.
- **Architecture:** **1T parameters**, `bailing_hybrid` architecture — a **hybrid linear attention design combining Lightning Attention with MLA (Multi-head Latent Attention)**, no positional encoding dependency in the usual sense. Upgraded from the Ling-2.0 base via architectural-migration pre-training plus post-training techniques: Evolutionary Chain-of-Thought, Linguistic Unit Policy Optimization, bidirectional preference alignment, and shortest-correct-response distillation. Agent capability trained with **KPop**, a reinforcement-learning framework for large-scale environment-grounded data with asynchronous scheduling across coding, search, tool use and workflow execution. Also uses an **asynchronous RL architecture** with the **IcePop** algorithm (inherited from Ring-1T) for stable trillion-parameter RL. **MIT License.**

### Raw benchmarks found

> Vendor figures are from the official HF model card and are labeled by reasoning effort (`high` / `xhigh`). **Independently confirmed** rows are those sitting on public Hugging Face evaluation leaderboards.

Agent / tool use:

- PinchBench: **87.60** (official card, `high`) — InclusionAI states this is notably higher than GPT-5.4 xHigh and Gemini-3.1-Pro high
- **ClawEval (General): 63.82** (official card, `high`) — **independently confirmed on the Hugging Face `claw-eval/Claw-Eval` leaderboard**; InclusionAI calls it "among the top comparable models." This is one of the very few verified Claw-Eval figures in the dataset.
- **Tau2-Bench (Telecom): 95.32** (official card, `high`) — InclusionAI states the gap to the highest-scoring model is **under 1 point**. This is the strongest single agentic number found for this model.
- SWE-bench Verified: **74%** — **independently confirmed on the Hugging Face `SWE-bench/SWE-bench_Verified` leaderboard**
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Tau3-Banking / Tau2-Bench other domains: only the Telecom scenario is published
- GDPval-AA: no verified public score found
- ClawProBench: no verified public score found (ClawEval General is the related published row)
- Terminal-Bench 2.1 / 2.0 / 3.0 / 4.0: **no verified public score found for any variant** — a notable gap for an agentic-first model

Reasoning / knowledge:

- **GPQA Diamond: 88.27** (`xhigh`) — **independently confirmed on the Hugging Face `davidrein/gpqa` Diamond leaderboard**
- **AIME 2026: 95.83** (`xhigh`) — **independently confirmed on the Hugging Face `MathArena/aime_2026` leaderboard**; InclusionAI says it is "on par with multiple leading models"
- **ARC-AGI-2: 66.18** (`xhigh`) — InclusionAI states this surpasses Gemini-3.1-Pro high and Claude-Opus-4.7 xhigh
- Artificial Analysis Intelligence Index: **32** (Artificial Analysis model page). **Discrepancy flagged:** AA's InclusionAI *provider* page lists the same model at **17** (and Ling-2.6-1T at 17 with an estimate asterisk) while ranking it #4 of five. 44B's registry lists Intelligence **30.6**. The 32 vs 17 gap is large and unexplained by configuration in the sources; the higher, model-page figure is used here as the more current reading, and the ~17 reading is noted as a plausible stale snapshot.
- AA Coding Index: **42.8** (44B registry)
- HLE / HLE w/ tools: no verified public score found
- AA-LCR / LongBench v2 / CritPt / Omniscience: no verified public score found

Coding:

- SWE-bench Verified: **74%** (Hugging Face leaderboard, independently confirmed)
- SWE-bench Pro / SWE-bench Multilingual: no verified public score found
- Terminal-Bench (any version): no verified public score found
- LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench / FrontierCode: no verified public score found
- AA Coding Index: **42.8** — mid-pack, and the low point relative to Ring's reasoning scores

Long context:

- **128K native, 256K via YaRN**, verified on the official HF download table and consistent with AA's 262k listing. **No MRCR / RULER / GraphWalks / LongBench / AA-LCR measurement exists**, so effective retrieval quality is entirely unmeasured — a real gap for a model whose selling point is long-horizon task stability.

Speed / cost efficiency inputs:

- Output speed: **118 tokens/s** (Artificial Analysis); 44B registry lists 123 tokens/s
- Time to first token ~**4.14 s**; end-to-end response ~**25.40 s**; reasoning time ~**17.01 s** (Artificial Analysis) — the async-RL/`high` configuration trades latency for capability, and `high` is documented as the faster production default
- Cost per Artificial Analysis Intelligence Index task: **$4.14**

### Normalized scores (1–100)

- **Tool use: 88/100.** This model's standout dimension. **Tau2-Bench Telecom at 95.32%** is within a point of the best model measured, **PinchBench 87.60** beats GPT-5.4 xHigh and Gemini 3.1 Pro high per the vendor, and **ClawEval 63.82** is both vendor-reported *and* confirmed on the Hugging Face leaderboard — one of the rare verified Claw-Eval datapoints in the dataset. Capped slightly by the total absence of Terminal-Bench at every version, any GDPval-AA, Tau3-Banking, Toolathlon or MCP-Atlas figure.
- **Reasoning: 86/100.** Three independently leaderboard-confirmed numbers — **GPQA Diamond 88.27**, **AIME 2026 95.83**, plus a vendor **ARC-AGI-2 66.18** that the vendor states beats Gemini 3.1 Pro high and Opus 4.7 xhigh. Held below the top by an AA Intelligence Index of only 32 (or 17 on the provider page) and the complete absence of HLE, LCR and CritPt data.
- **Context window: 74/100.** **128K native** places it in the 100K–200K tier; the **256K YaRN extension** (and AA's 262k listing) lifts it into the 200K–500K band, and the score reflects the usable extended window rather than the native one. Deliberately *not* scored higher: **no long-context retrieval benchmark has ever been published for this model**, and 128K is the only non-extrapolated figure.
- **Multimodal: 15/100.** **Text-only**, confirmed by the HF repo being a `Text Generation` causal-LM checkpoint with no vision tower and its Inference Providers listed under "Text Generation." Floor score by methodology — no image, audio, video or PDF input, no non-text output. InclusionAI's vision-capable sibling in this family is Ling-3.0-flash-VL, a different model.
- **Coding: 70/100.** **SWE-bench Verified 74%** is independently confirmed and respectable. But the published coding surface is *only* that one number: no SWE-bench Pro, no Terminal-Bench at any version, no DeepSWE, no LiveCodeBench, no SciCode, no Vibe Code Bench. An AA Coding Index of 42.8 — well below Ring's own reasoning scores — suggests coding is not where its 1T parameters pay off best.
- **Cost efficiency: 91/100.** **$0.30 in / $2.50 out** with a blended $0.52–0.85 lands near the ~$1.25/$4.25 reference point (~88), and **MIT-licensed open weights** remove token cost entirely for self-hosters — a genuine plus for a 1T model, though 1T parameters is a heavy self-hosting commitment. Held below the 95+ band because it is the **most expensive of the five InclusionAI models by 11× blended price**, Artificial Analysis measures **$4.14 per Intelligence Index task**, and there is no Free tier.
- **Overall Score: 67/100.** Best fit: **long-horizon enterprise and agentic workflows where tool execution stability matters more than breadth** — Tau2-Bench Telecom near the leader and a verified top-tier ClawEval make it a strong pick for telecom, business-process and tool-collaboration automation, especially where `high` effort and self-hosted MIT weights are acceptable. Not the pick for multimodal work, and a dedicated coding model is the better call for SWE-agentic loops given the missing Terminal-Bench/DeepSWE evidence.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-09
- Method: public internet research cross-checked across the **official Hugging Face model card** for `inclusionAI/Ring-2.6-1T` (agent-capability and reasoning-effort sections with the PinchBench / ClawEval / Tau2 / ARC-AGI-2 / AIME / GPQA figures, the 128K→256K YaRN context table, the SGLang deployment recipe and the async-RL/IcePop training description), the **Hugging Face evaluation leaderboards** for SWE-bench Verified, Claw-Eval, GPQA Diamond and AIME 2026 (four independently confirmed scores), the **technical report** `arXiv:2606.15079` abstract, Artificial Analysis's model page and InclusionAI provider page (Intelligence Index, price, speed, latency, cost per task, context), 44B's model registry, and BenchmarkList's and Opper.ai's listings. Explicitly flagged the unresolved Artificial Analysis Intelligence Index discrepancy (32 on the model page vs 17 on the provider page) and the complete absence of Terminal-Bench, HLE and long-context retrieval data. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ling_2.6_1T.md`, using the same headings — the sibling **Ling-2.6-1T** (instant-response, token-efficient, and *not* the same model) legitimately needs its own report. Re-scoring Ring is warranted once Terminal-Bench, HLE and an AA-LCR/MRCR number exist.