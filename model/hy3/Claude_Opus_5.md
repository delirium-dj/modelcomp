# Hy3 — findings by Claude Opus 5

- Source: Tencent Hy Team / Hunyuan (`tencent/Hy3`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent's **Apache-2.0 open-weight** 295B/21B-active MoE, and the production-hardened successor to Hy3 Preview: "Following the Hy3 Preview launch in late April, we gathered feedback from **50+ products** and scaled up post-training with higher quality data … Hy3 … outperforms similar-size models and **rivals flagship open-source models with 2-5x parameters**" ([Hy3 model card](https://huggingface.co/tencent/Hy3)). What distinguishes this release is not a benchmark but a reliability programme: Tencent publishes quantified before/after figures for hallucination, commonsense error, multi-turn drift and cross-scaffolding variance. Distinct model; `hy3-preview` and `hy4` are separate folders.
- **Provider / access:** **Open weights on Hugging Face, ModelScope, GitCode and CNB**, in BF16 and a released **Hy3-FP8** variant. Serving via vLLM (MTP speculative decoding, `hy_v3` tool-call and reasoning parsers) and SGLang (EAGLE speculative decoding, `hunyuan` parsers), both with dedicated recipes. A complete **finetuning pipeline** is published, plus **GRPO RL post-training** support via verl on Megatron-LM (through NVIDIA Megatron-Bridge) with vLLM rollout, and the **AngelSlim** compression toolkit. Hosted by DeepInfra. **No OpenCode Zen ID.** Adoption is substantial: **460,709 downloads** in the trailing month, 66 community quantizations, 14 finetunes.
- **Release / knowledge:** **No explicit release date on the model card.** Hy3 Preview launched "in late April" 2026 and Hy3 followed after feedback from 50+ products; the Hy3 collection shows a last update of **23 days before access** (~mid-September 2026). Knowledge cutoff: no verified public date found.
- **IDs:** `tencent/Hy3` and `tencent/Hy3-FP8` (Hugging Face), served as `hy3`. **No free tier** — Apache 2.0 weights are the free path.
- **Context length:** **256,000 tokens** (specification table). Max output: not on the model card; this repo's metadata records 32K, reported as curated.
- **Modalities:** **Text in → text out.** This requires a correction to the folder's curated metadata, which claims "Text, image in; text out": Hugging Face classifies the model `text-generation`, and Tencent's **own specification table contains no vision encoder or image-related component**. I could find no positive vendor statement supporting image input, so I score it text-only and flag the `meta.json` claim as uncorroborated. Reasoning: **yes, with three levels — `no_think` (the default, direct response), `low`, and `high` (deep chain-of-thought)**. Note the default differs from Hy4, which defaults to `high`. Recommended sampling: temperature 0.9, top-p 1.0. Tool calls: yes, with dedicated parsers and `--enable-auto-tool-choice`.
- **Pricing (as of 2026-10-08):** **$0 licence cost — Apache 2.0.** This repo's curated metadata records a TokenHub preview rate of **~$0.18 / MTok input, ~$0.59 / MTok output**, reported as curated rather than re-verified. Self-hosting: Tencent states 295B "on 8 GPUs, we recommend using **H20-3e** or other GPUs with larger memory capacity."
- **Architecture:** Fully disclosed. **295B total parameters, 21B activated, plus a 3.8B MTP layer** (HF safetensors reports 299B); **80 layers** excluding the single MTP layer; **192 experts with top-8 activated**; **64 attention heads using GQA with 8 KV heads and head dimension 128**; hidden size 4096; intermediate size 13,312; vocabulary 120,832; BF16. **Apache 2.0.**

### Raw benchmarks found

> **Provenance is unusually good here.** Tencent publishes its benchmark appendix as an image, but the Hugging Face **evaluation-results panel carries eight independent leaderboard exports** from the benchmark owners themselves — GPQA Diamond, SWE-bench Verified, SWE-bench Multilingual, Terminal-Bench 2.1, SWE-bench Pro, DeepSWE, APEX-Agents and Long-Horizon-Terminal-Bench — which are the figures I weight. Artificial Analysis independently covers the same model, and where the two overlap (GPQA Diamond 90.4 vs 89.7) they agree closely.

Agent / tool use:

- **Terminal-Bench 2.1: 71.7%** (official `harborframework/terminal-bench-2.1` leaderboard export)
- GDPval-AA: **1136 Elo** / **28.3%** normalized ([Artificial Analysis](https://artificialanalysis.ai/models/hy3))
- AA Agentic Index: **25.6%** (Artificial Analysis); **APEX-Agents: 25.6%** (mercor leaderboard export)
- **Long-Horizon-Terminal-Bench ("Lhtb Solved"): 1** (IntelligenceLab leaderboard export) — effectively zero on multi-hour autonomous work
- **Cross-scaffolding robustness (Tencent, quantified):** "On SWE-Bench Verified, accuracy variance across scaffoldings like **CodeBuddy, Cline, and KiloCode remains within 4%**." This is a genuinely unusual and valuable claim — most models in this dataset swing 13–30 points between harnesses — and it directly addresses the harness-sensitivity problem I have flagged repeatedly elsewhere in this pass.
- **Tool-call reliability (Tencent):** multiple baseline reliability issues fixed to "production-grade standards across tool configurations and output constraints", with improved tool-call error recovery
- τ²/τ³-bench, OSWorld, MCP-Atlas, Toolathlon: no verified public score found

Reasoning / knowledge:

- **GPQA Diamond: 90.4** (Idavidrein/gpqa leaderboard export); independently **AA-GPQA Diamond 89.7%** (Artificial Analysis) — 0.7 points apart across two sources, and a very high figure for a 21B-active model
- AA-HLE: **33.5%**; AA-LCR: **79.0%**; CritPt: **4.9%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **25.3**; BenchLM overall **52.67/100, rank #82 of 889** (14 of 625 benchmarks)
- **AA-Omniscience: Index −18.5, Accuracy 32.0%, Hallucination Rate 74.1%**
- **Internal anti-hallucination results (Tencent, quantified and worth recording in full):** guided by the stated principle "answer when grounded, state when evidence is missing, do not conflate sources or fabricate data", Tencent reports its **internal hallucination rate fell from 12.5% to 5.4%** and **commonsense error rate from 25.4% to 12.7%** on real-world-scenario evaluations. **This sits in sharp tension with Artificial Analysis's externally-measured 74.1% hallucination rate** — the two are measuring very different things on very different sets, and I report the conflict rather than choosing.
- **Multi-turn (Tencent, internal):** comprehensive multi-turn test issue rate fell from **17.4% to 7.9%**, with stated improvements in coreference resolution, ellipsis recovery and multi-turn constraint inheritance, plus "marked" improvement on long-dialogue evals like MRCR — **no MRCR number published**
- **Blind expert evaluation (Tencent):** **270 experts** scoring tasks drawn from their own work; Hy3 scored **2.67/4 against GLM-5.1's 2.51/4**, with the largest advantages in **frontend development, data & storage, and CI/CD**

Coding:

- **SWE-bench Verified: 78** (SWE-bench leaderboard export) — a strong independently-exported figure
- **SWE-bench Multilingual: 75.8** (leaderboard export)
- **SWE-bench Pro: 57.9** (ScaleAI leaderboard export)
- Terminal-Bench 2.1: **71.7** (counted once for agentic and once here)
- AA Coding Index: **58.8%**; AA-SciCode: **48.6%** (Artificial Analysis)
- **DeepSWE: 28** (datacurve leaderboard export) — weak; for scale, Hy4 preview scores 64.3 and GLM-5.2 46.2
- LiveCodeBench, NL2Repo, ProgramBench: no verified public score found

Multimodal:

- **Nothing, consistent with a text-only model.** Design Arena — Website **1187 Elo** ([OpenRouter](https://openrouter.ai/tencent/hy3/benchmarks)) measures preference for generated front-end design from a text model and is not multimodal evidence.

Long context:

- No MRCR, RULER or needle-retrieval number published — Tencent claims "marked" MRCR improvement without giving a value. **AA-LCR 79.0%** is the only quantified long-context signal, and it is strong.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 at **71.7% from the official leaderboard** is a solid result, and the **sub-4% cross-scaffolding variance on SWE-bench Verified** deserves specific credit: it is the only quantified harness-robustness claim I have encountered in this entire pass, and harness sensitivity is precisely what undermines most agentic numbers in this dataset. Capped firmly by the aggregates and the hard tail — GDPval-AA 1136 Elo, AA Agentic Index 25.6%, APEX-Agents 25.6%, and a **Long-Horizon-Terminal-Bench score of 1**, which says multi-hour autonomy is out of reach.
- **Reasoning: 76/100.** **GPQA Diamond 90.4 on the official leaderboard, independently 89.7 at Artificial Analysis** — two sources within a point, on a model activating 21B parameters, is a genuinely strong result. AA-LCR 79.0% is good and AA-HLE 33.5% respectable. Capped by CritPt 4.9%, an AA Intelligence Index of 25.3, and the unresolved hallucination picture: Tencent's internal figure of 5.4% and Artificial Analysis's 74.1% cannot both describe the same behaviour, and until that is reconciled I cannot credit the anti-hallucination work at face value — though the stated design principle and the published before/after deltas are more than most vendors offer.
- **Context window: 76/100.** 256K, vendor-stated with a complete architecture table behind it (GQA with 8 KV heads keeps the KV cache tractable at depth), and **AA-LCR 79.0%** shows real long-context reasoning quality. Held in the mid-70s because 256K is mid-pack against the 1M windows common here, and because the MRCR improvement Tencent highlights is **claimed without a number** — there is no published retrieval measurement at any depth.
- **Multimodal: 15/100.** **Text-only.** Hugging Face classifies it `text-generation` and Tencent's own specification table contains no vision component. This is the template's floor, and it costs this model roughly 12 points of Overall. The folder's `meta.json` claim of image input is reported above as uncorroborated and should be corrected.
- **Coding: 78/100.** The strongest dimension and the best-verified: **SWE-bench Verified 78, SWE-bench Multilingual 75.8 and SWE-bench Pro 57.9 all arrive as leaderboard exports from the benchmark owners**, not vendor claims — and 78% on SWE-bench Verified from 21B active parameters is excellent. The **270-expert blind evaluation** beating GLM-5.1, with frontend/data/CI-CD named as the strongest areas, is real-world evidence most vendors do not attempt. Capped by **DeepSWE 28** (less than half Hy4 preview's 64.3), AA-SciCode 48.6%, and no LiveCodeBench.
- **Cost efficiency: 88/100.** **Apache 2.0** on a 295B/21B-active model with a **released FP8 checkpoint**, native **MTP speculative decoding** (2 speculative tokens in the official vLLM recipe, EAGLE in SGLang), a published finetuning pipeline, **GRPO RL post-training** support, and the AngelSlim compression toolkit — plus 66 community quantizations and 460,709 monthly downloads, which is real ecosystem traction. The curated TokenHub rate of **~$0.18 / $0.59 per MTok** would be outstanding value for SWE-bench 78. Docked because self-hosting needs **8 GPUs of H20-3e class or larger**, there is no free hosted tier, and only one inference provider appears.
- **Overall Score: 62.6/100.** Mean of the five non-cost dims (68 + 76 + 76 + 15 + 78) / 5 = 62.6. Best fit: **production software engineering on self-hosted open weights** — SWE-bench-grade repair at 78%, frontend and CI/CD work (where its own expert panel rated it strongest), and science reasoning at GPQA 90.4 — specifically where **harness stability matters**, because sub-4% variance across CodeBuddy/Cline/KiloCode is a property almost nothing else here can claim. Avoid it for multi-hour autonomous runs (Long-Horizon-Terminal-Bench 1) and treat its hallucination behaviour as unsettled until the 5.4%-vs-74.1% gap is explained. The Overall is suppressed ~12 points by the text-only floor.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — the `tencent/Hy3` Hugging Face model card (Apache-2.0 licence, the complete specification table covering 295B total / 21B active / 3.8B MTP, 80 layers, 192 experts top-8, GQA 64 heads with 8 KV heads, hidden and intermediate sizes, 256K context and 120,832 vocabulary, BF16 precision, text-generation classification with no vision component, the three-level `reasoning_effort` ladder and its `no_think` default, recommended sampling, the Hy3-FP8 variant, the 8×H20-3e serving guidance, the vLLM and SGLang recipes with MTP/EAGLE speculative decoding and dedicated parsers, the finetuning and GRPO/verl RL pipelines, AngelSlim, the Hy3-Preview lineage and 50+ product feedback loop, the 270-expert blind evaluation against GLM-5.1 with per-domain strengths, the sub-4% cross-scaffolding SWE-bench variance claim, and the quantified internal before/after figures for hallucination 12.5%→5.4%, commonsense error 25.4%→12.7% and multi-turn issue rate 17.4%→7.9%), its Hugging Face **evaluation-results panel** providing eight independent leaderboard exports which are the figures weighted here, BenchLM's aggregated page, and the underlying Artificial Analysis and OpenRouter leaderboards. The conflict between Tencent's internal 5.4% hallucination figure and Artificial Analysis's 74.1% is reported rather than resolved. The folder's `meta.json` image-input claim is reported as uncorroborated against Tencent's own specification table. Tencent's unquantified MRCR improvement was not estimated. No data was imported from `hy3-preview` or `hy4`. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
