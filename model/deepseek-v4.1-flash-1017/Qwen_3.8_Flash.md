# DeepSeek V4.1 Flash 1017 — findings by Qwen 3.8 Flash

- Source: DeepSeek (`deepseek-ai/DeepSeek-V4.1-Flash-1017`; curated id `opencode/deepseek-v4.1-flash-1017`), cross-checked against the Hugging Face model card, the-decoder launch report, llm-stats and mindstudio/local-ai-zone deep-dives
- Date: 2026-10-23 (UTC); second pass 2026-11-03 (UTC) — **revisit trigger partially met**: Artificial Analysis now **independently tracks this exact checkpoint** — Intelligence Index **33** (#1 of its 233-model comparison class, median 23), price **$0.30/$1.20** with a **98 % cache discount** and **165 tok/s** reconfirmed; independent placement releases the pure-vendor discount on **Reasoning 74→77** (Overall 77.2→**77.8**); per-suite coding/agent absolutes (SWE-V, Terminal-Bench) still unreproduced, so Tool 80 / Coding 84 hold
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** DeepSeek's **2026-10-17 point update to V4.1-Flash** — an **open-weight (MIT) 552B-total / ~16B-active CED MoE** tuned for **agentic coding and end-to-end software development**, which DeepSeek frames as a **Pareto improvement** over its 5-weeks-older predecessor: better scores, faster task completion, and dramatically shorter (cheaper) outputs. Post-trained with **Reinforcement Learning with Self-Feedback (RLSF)** — the model uses its own confidence/critiques as the reward signal, removing external reward models. Its headline is cost-efficiency: top agentic-coding accuracy at a fraction of rivals' per-task cost.
- **Provider / access:** open weights (Hugging Face `deepseek-ai/DeepSeek-V4.1-Flash-1017` + ModelScope, MIT); hosted on DeepSeek's API / app / site; retired `v4-flash` routes now serve this checkpoint; tuned for DeepSeek Harness, Tencent CodeBuddy, WorkBuddy; new **Search & Fetch APIs** ($0.75/1,000 calls) accompany it.
- **Release / knowledge:** **2026-10-17**; knowledge cutoff not separately published (V4.1 family).
- **IDs:** `DeepSeek-V4.1-Flash-1017`; predecessor `deepseek-v4.1-flash`; family `deepseek-v4-pro`, `deepseek-v4-flash`, `deepseek-v3.2`.
- **Context window:** **1,000,000 tokens** / **384,000 max output** (an unusually large output budget).
- **Modalities:** **text + image in**, text out; reasoning yes; agentic tool use yes (search/fetch/code). Output-side video animation claimed by DeepSeek.
- **Pricing (as of 2026-10-23):** hosted **$0.30/M input, $1.20/M output, $0.006/M cached** (off-peak ~$0.15/$0.60); **free to self-host** under MIT.
- **Architecture:** 552B / ~16B-active CED (conditional-expert-density?) sparse MoE; RLSF post-training.

### Raw benchmarks found

> **Provenance caveat (decisive here):** every comparison number is **DeepSeek's own internal benchmark**, and the-decoder explicitly notes **"independent benchmarks haven't come out yet."** DeepSeek's claim to *beat Claude Opus 5, GPT-5.6-Sol, Kimi K3 and GLM 5.3* on coding/agent suites is therefore **self-reported, unverified by any third party** — heavily discounted below rather than accepted at face value. (Also note: China reportedly weighing tighter rules on top-10 open-weight releases — a future availability risk.)

Coding / agents (DeepSeek-internal):

- **DeepSWE: 77.0%** top score at **~$0.20 average cost/task**; low setting **72%** at ~$0.10 — vs predecessor V4.1-Flash **74.2%** at ~$0.50/run (a Pareto gain)
- DeepSeek charts place rivals (GPT-6 Astra, Gemini 3.8 Flash, Claude Opus 5) at **$2–$10+/task** and below its accuracy — *vendor-measured, not co-run independently*

Reasoning / knowledge:

- "Improves on its predecessor in every tested category" (internal); **no independent GPQA-Diamond / HLE / AIME / AA Intelligence-Index absolute** published for this checkpoint as of 2026-10-23.

Long context / multimodal:

- 1M window + 384K output; text+image input; **no MRCR/RULER retrieval score or independent vision benchmark** transcribed.

### Normalized scores (1–100)

- **Tool use: 80/100.** Explicitly agent-optimized (RLSF, Search/Fetch APIs, harness tuning, strong claimed end-to-end dev orchestration) — but the agentic superiority claims are entirely vendor-run with no third-party τ²/agent reproduction, so this is a high-but-unverified score.
- **Reasoning: 77/100.** A Flash-tier model that DeepSeek says improved reasoning over its predecessor across the board. (2026-11-03 second pass: Artificial Analysis now **independently** scores this checkpoint **"33 on the Artificial Analysis Intelligence Index, placing it well above average among comparable models (median: 23)"** and ranks it **"#1/233"** in its comparison class — an independent aggregate confirmation of frontier-adjacent depth, so the pure vendor-only discount is partially released: 74→**77**. Per-suite GPQA/HLE absolutes still not individually published, so it stays below the proven-frontier 80s.)
- **Context window: 88/100.** A genuine **1M** window *plus* an exceptional **384K** output budget — top-tier in both span and generation length; docked only for the lack of a published single-window retrieval proof.
- **Multimodal: 60/100.** Text+image input is real (image-grounded coding), well above text-only; held modest because there's no audio input, no independent vision eval, and the video claim is output-side/vendor-framed.
- **Coding: 84/100.** Its strongest claim — **DeepSWE 77.0%** and asserted leads over Opus 5 / GPT-5.6-Sol / Kimi K3 — is impressive for an open 16B-active model, but it is *entirely self-measured*; discounted well below a peer-verified frontier-coder while still scoring as a genuinely strong agentic coding model.
- **Cost efficiency: 96/100.** The model's defining virtue and the best-evidenced one: ~$0.20/task on DeepSWE vs rivals' $2–$10+, $0.30/$1.20 (cached $0.006) hosted, and **free MIT self-hosting** — a Pareto efficiency story independent of the contested accuracy claims.
- **Overall Score: 77.8/100.** Half-up mean of the five quality dims (80+77+88+60+84)/5 = 77.8. (2026-11-03 second pass: Reasoning 74→77 on Artificial Analysis's independent Intelligence Index of 33 (#1/233 class), raising the mean from 77.2 to 77.8; Cost excluded.) Best fit: **cost-sensitive agentic coding and end-to-end software build** — game/app programming, 3D/design tasks, long autonomous runs — where open MIT weights, a 1M/384K window and sub-$0.20 task cost are decisive. AA's independent aggregate now corroborates its high general intelligence, but the specific "beats Opus 5 / GPT-5.6-Sol / Kimi K3 on coding" line still awaits per-suite (SWE-bench Verified / Terminal-Bench) third-party reproduction; treat that ranking as directional.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-23); the pass-1 **revisit trigger explicitly asked for an independent Artificial Analysis / Vals row for this exact checkpoint.** It now exists.

**Sources:** Independent benchmark — https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017 (fetched 2026-11-03, the **(Max)** reasoning page: **"DeepSeek V4.1 Flash 1017 (Max) scores 33 on the Artificial Analysis Intelligence Index, placing it well above average among comparable models (median: 23)"**, **"#1/233 … Artificial Analysis Intelligence Index"**, **"amongst the leading models in intelligence and well priced when comparing to other open weight models of similar size. It's also notably fast, however very verbose"**, **"165 tokens per second … notably fast"**, **"170M Output tokens from Intelligence Index"** vs **"a median of 100M"**, and the price/cost block **"In$0.30 Out$1.20 Cache Discount 98% $0.60 Cost per Intelligence Index task"**, **"Total parameters 552B"**, **"Context window 1M"**, **"text and image input, outputs text"**) · vendor/lane — https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017 (**"a minor update to DeepSeek-V4.1-Flash, delivering substantial improvements across reasoning, coding, agentic tasks"**) and https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017 (**"suited for coding, terminal, and computer-use agents, along with long-horizon tasks"**) · community — https://www.reddit.com/r/LocalLLaMA/comments/1x8bb6b/ (**"DeepSeek V4.1 Flash (1017) Now Leads Open-Weight"** on coding, but self-noting **"those are just coding benchmarks, this is not overall score … usually shown here as Artificial Intelligence Index"** — i.e. the coding-lead claim is still vendor-framed, no independent SWE-bench Verified / Terminal-Bench absolutes surfaced).

**What moved and how it was resolved:**

1. **Revisit trigger MET (partially) — Reasoning 74→77:** AA now independently places the checkpoint at Intelligence Index **33** (#1/233 class vs median 23), a genuine third-party aggregate confirming frontier-adjacent reasoning. Pass 1's "zero independent reasoning absolutes" premise no longer holds, so the vendor-only discount on Reasoning is lifted from 74 to 77 (not further — GPQA/HLE per-suite absolutes still aren't individually tabulated). **Overall 77.2→77.8.**
2. **Tool 80 and Coding 84 unchanged:** AA confirms general intelligence but the *specific* coding/agent leads over Opus 5 / GPT-5.6-Sol / Kimi K3 remain vendor-measured — the reddit thread itself separates the vendor "leads open-weight on coding" claim from the AA Index. Without a third-party SWE-bench Verified / Terminal-Bench absolute, those bands stay discounted exactly as pass 1 set them (per-suite reproduction still pending — new revisit trigger).
3. **Cost / Context / Multimodal reconfirmed:** AA's $0.30/$1.20 / 98% cache / 1M / text+image / 552B all match pass 1 — Cost 96 holds (with a new "very verbose, 170M vs 100M median" caveat noted), Context 88 (1M + 384K out, still no MRCR retrieval proof), Multimodal 60 (image-in, no independent vision eval). 80+77+88+60+84 = 389/5 = **Overall 77.8**.

**Scores changed by this pass:** Reasoning 74→77 (AA independent Intelligence Index 33, #1/233); **Overall 77.2→77.8**. Cost re-confirmed (verbose caveat); Tool/Coding/Context/Multimodal unchanged. New revisit trigger: third-party SWE-bench Verified / Terminal-Bench / GPQA absolutes for this checkpoint.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — **the-decoder** launch report (DeepSWE 77.0% @ ~$0.20/task, low-set 72% @ ~$0.10, predecessor 74.2% @ ~$0.50, RLSF, rivals at $2–$10+/task, explicit "independent benchmarks haven't come out yet," Search/Fetch API $0.75/1k, China open-weight export-control risk), the Hugging Face model card (`deepseek-ai/DeepSeek-V4.1-Flash-1017`, MIT open weights, "minor update… substantial improvements"), llm-stats (released 2026-10-17, $0.30/$1.20, cached $0.006, 1M context), and mindstudio/local-ai-zone deep-dives. Curated `meta.json` (not scaffolded) supplies the 552B/16B-active CED and 1M/384K spec. Scores are normalized 1–100 interpretations; because all capability figures are vendor-measured with no third-party reproduction yet, coding/reasoning/tool-use are **discounted rather than accepted at DeepSeek's claimed frontier level** (mirroring the all-vendor treatment of Xing and LongCat-2.5-Preview), while cost-efficiency — corroborated across sources — scores high.
- Revisit trigger: an independent Artificial Analysis / Vals / third-party benchmark row for `DeepSeek-V4.1-Flash-1017` (GPQA, SWE-bench Verified, Terminal-Bench), confirming or correcting DeepSeek's self-reported coding/agent leads.
- Revisit trigger (updated 2026-11-03): the 2026-10-23 "independent AA row" trigger is **now met at the aggregate level** (AA Intelligence Index 33 landed, lifting Reasoning to 77); the outstanding trigger is a **third-party per-suite absolute** — SWE-bench Verified / Terminal-Bench / GPQA — to confirm or correct DeepSeek's self-reported coding/agent leads over Opus 5 / GPT-5.6-Sol / Kimi K3.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
