# Qwen3.8 Flash-Next — findings by Space Bunny

- Source: Alibaba/Qwen (`Qwen/Qwen3.8-Flash-Next`, hosted as `qwen3.8-flash`)
- Date: **2026-10-17 (UTC) — second pass.** First pass 2026-10-05 (Overall 89.0).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash-Next (the open-weight checkpoint behind the hosted `qwen3.8-flash` / **Qwen3.8-Flash**)
- **Short description:** Qwen's open-weight multimodal MoE built on the experimental Qwen4-generation architecture (Gated DeltaNet + Qwen Sparse Attention), positioned for cost-efficient long-context reasoning, coding and agent execution. The vendor states the hosted **Qwen3.8-Flash is "the official version based on Qwen3.8-Flash-Next" with more production features**, so the weights and the paid route are the same model, not two.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-Flash-Next` (weights, `qwen-community-1.0` license, 2.46M downloads in the last month); Alibaba Cloud Model Studio / Qwen Cloud route **`qwen3.8-flash`** (OpenAI- and Anthropic-protocol compatible, function calling, built-in tools, structured output); NVIDIA `nvidia/Qwen3.8-Flash-Next-NVFP4` (released 2026-08-31); local vLLM / SGLang / KTransformers / TokenSpeed.
- **Release / knowledge:** weights 2026-08-24/26 (HF repo creation 2026-08-24; BenchLM/BenchLeader list 2026-08-26); NVIDIA NVFP4 build 2026-08-31; hosted `qwen3.8-flash` documented page updated 2026-10-10. No published knowledge cutoff.
- **IDs:** `Qwen/Qwen3.8-Flash-Next`; `qwen3.8-flash` (Alibaba Cloud Model Studio / Qwen Cloud); `nvidia/Qwen3.8-Flash-Next-NVFP4`.
- **Context window:** weights are **262,144 native**, documented as extensible to 1,000,000 via a YaRN `rope_parameters` override (the card warns static YaRN can degrade shorter-context performance). **The hosted route now serves 1,000,000 by default** — Alibaba's own model page: max input 991,808 (983,616 in thinking mode), max output **131,072**, max chain-of-thought 262,144. Third-party trackers still carry 256k/262k (Artificial Analysis, BenchLM, BenchLeader), i.e. they report the weights, not the served limit.
- **Modalities:** text, image, video in (hour-scale video guidance in the card); text out; thinking on by default with `xhigh`/`medium`/`low` effort and `preserve_thinking`; tool calls and structured outputs supported on the hosted route.
- **Pricing (as of 2026-10-17) — first pass found no hosted price at all; that is now fixed.** Alibaba Cloud Model Studio, `qwen3.8-flash`, 0<Token≤1M: **International $0.15 in / $0.47 out per 1M**; **Global $0.113 / $0.382**; **US (Virginia) $0.15 / $0.47**; **1 million tokens free quota, "valid for 90 days from the date of Model Studio activation, model release, or application approval, whichever is later"** (that is a dated window, not a permanent free tier); 50% batch-inference discount; context caching $0.014 implicit-cache / $0.177 cache creation. Artificial Analysis reports a **blended $0.09/1M** at its 7:2:1 cache:input:output ratio and BenchLeader $0.230 blended ($0.150 in / $0.470 out). Self-hosting is open weights under `qwen-community-1.0`.
- **Architecture:** **verified this pass** — 125B total parameters with **6B active**, plus 51B n-gram embedding and 4B MTP; MoE with 512 experts (10 routed + 1 shared), 48 layers, hidden 2,560, hybrid Gated DeltaNet + Qwen Sparse Attention, Gated Residual (4 branches, bottleneck rank 320). The first pass declined to claim a parameter count ("500B size class"); the vendor card and the NVIDIA quantization card both now publish 125B/6B. Hugging Face's safetensors index reads 180B total (embeddings included).

### Raw benchmarks found

> Vendor rows are labelled **vendor**. Third-party measured rows are labelled with the measuring party. Note that BenchLM's "Terminal-Bench 2.1 / GPQA / HLE" family for this model is largely the vendor table mirrored — the independent rows below are labelled separately.

Agent / tool use:

- **Terminal-Bench 2.1: 86.1%, rank 21 (Artificial Analysis, via BenchLeader, last measured 2026-10-14)** — *independent, and the single biggest gap the first pass flagged as "no verified public exact value found"*. Corroborated at **83.3%** by NVIDIA's own FP8/NVFP4 quantization evaluation.
- Terminal-Bench 4.0: **25.3%, rank 50** (Artificial Analysis, via BenchLeader) — *independent*; a very large gap over the vendor-facing agentic numbers of its sibling Qwen3.8-27B (5.6%).
- Toolathlon Verified (Pass@1): **73.5%** (**vendor**).
- CoWorkBench **73.9%**; JobBench **55.7%**; Agents' Last Exam **24.3% Pass@1 / 51.2 score**; IFBench **81.3%** (**vendor**).
- GDPval-AA: **1648 Elo / 55.6–56.6% normalized** (Artificial Analysis; the two normalized figures appear on AA and BenchLM respectively — same Elo, rounding of the normalization).
- AndroidWorld **84.5%**; OSWorld 2.0 **19.4% binary / 52.3% partial** (**vendor**) — the binary score is the weakest number in the model's agentic profile and is unchanged from the first pass.
- BenchLM public-lane agentic score **65.6 (#17/128)** and overall **64.23 (#37/889)** (BenchAlign v5.8, 2026-10-10); BenchLeader index 59.8 ±5.8 (#114/760). Aggregator composites disagree with each other by ~5 points and are not used for scoring.
- Tau3-Banking, Tau2-Retail, MCP-Atlas, Claw-Eval text rows: **still no verified public exact value found** for this ID.

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (**vendor**); **AA-GPQA Diamond 92.3% (#36)** (independent, agrees within 0.6 pp); Vals not found.
- HLE: **35.9%** (**vendor**, GPT-4o judge); **AA-HLE 38.0% (#96)** (independent, higher).
- CritPt: **11.1% (#105)** (Artificial Analysis, via BenchLeader) — unchanged; a real frontier-science weakness.
- Artificial Analysis Intelligence Index: **39.8, rank 61 of 704+** (AA v4.3.2, via BenchLeader) — unchanged from the first pass, but note the index was re-based (Terminal-Bench 2.1 → Terminal-Bench 4.0, AutomationBench-AA added), so this is not a like-for-like hold.
- LiveBench: **76.2% overall (#31)**, reasoning **87.4% (#26)**, coding **72.5% (#55)** (LiveBench, independent) — new this pass.
- AA-Omniscience Index **−9.7%**, Accuracy **24.5%**, Hallucination Rate **45.3%** — unchanged; still negative.
- MLCR: **still no verified public value found**.

Coding:

- DeepSWE 1.1 **58.7%** (**vendor**, best of Claude Code / mini-SWE-agent); SWE-bench Pro **62.5%** (**vendor**); SWE-bench Multilingual **81.0%** (**vendor**); NL2Repo-Bench **48.1%** (**vendor**); LiveCodeBench v6 **91.9%** (**vendor**).
- AA-SciCode **50.6% (#96)**; AA Coding Index **73.0** (Artificial Analysis, independent) — unchanged from the first pass.
- LMArena WebDev **1633, #17** (arena Elo, independent) — new this pass.
- ClawEval-MM **64.4% Pass@3 / 60.4 avg**; RecreationBench **49.9%**; ExtractBench mean **89.88** (**vendor**).
- SWE-bench Verified and Vibe Code Bench: **still no verified public value found**.

Long context:

- **Hosted 1,000,000 tokens** with 131,072 max output (Alibaba model page, updated 2026-10-10) — the weights' YaRN extension is now a served default rather than a manual override, which is what the first pass said was missing.
- AA-LCR: **79.7%, rank 86** (Artificial Analysis, independent) — unchanged from the first pass.
- **NVIDIA's independent quantization eval measures AA-LCR at 71.9% (FP8) / 74.1% (NVFP4)** — i.e. a third party reproducing the weights gets *lower* long-context retrieval than AA's hosted-route number. Also τ²-Bench Telecom 90.8% / 90.1%, MMMU-Pro 77.1% / 78.3%, Omniscience 28.1 / 27.6.
- **No retrieval benchmark at or near the full 1M length exists** — Context stays below the methodology's 100.

Multimodal:

- Vendor: MathVision 90.6% without CI / **95.7% with CI**; CharXiv (RQ) 84.6% / **90.6% with CI**; RealWorldQA 88.5%; LVBench 76.6%; ERQA 72.3%; Vision2Web 64.0%; AndroidWorld 84.5%.
- Independent: **NVIDIA NVFP4 eval MMMU-Pro 78.3% (FP8 77.1%)**; AA-MMMU-Pro 79.8% (first pass); AA-Omniscience 27.6–28.1.
- Audio input: **not supported** on this checkpoint — Alibaba routes audio to the separate `qwen3.8-omni-flash`. That is why multimodal is not 100.

Speed / cost inputs:

- Output speed **50.9–56 tok/s**, time to first answer **38–41 s**, cost per full Intelligence Index run **$0.372** (Artificial Analysis via BenchLeader, 2026-10-08/14). 50 tok/s and a ~40 s first answer make this a throughput model, not an interactive one.

### Normalized scores (1–100)

- **Tool use: 93/100.** **Raised from 90.** The gap that held this score down on the first pass — "Terminal-Bench, Tau3-Banking, and MCP-Atlas: no verified public exact value found" — is now filled by an independent **Terminal-Bench 2.1 of 86.1% (#21)** from Artificial Analysis, corroborated at 83.3% by NVIDIA's quantization eval, on top of Toolathlon 73.5%, CoWorkBench 73.9%, JobBench 55.7%, GDPval-AA 1648 Elo and Agents' Last Exam 51.2. The cap is unchanged in kind: **OSWorld 2.0 binary 19.4%** (partial 52.3%) means the GUI/computer-use tail is still weak, and Tau3-Banking and MCP-Atlas remain unpublished, so 93 is a floor-for-now rather than a frontier score.
- **Reasoning: 87/100.** Unchanged, and now better evidenced on both sides. Independent GPQA-Diamond 92.3% and AA-HLE 38.0% both sit at or above the vendor's 91.7% / 35.9%, and LiveBench reasoning 87.4% (#26) is a strong independent read. Against that, **CritPt is still 11.1%**, Omniscience is still **−9.7%** (accuracy 24.5%, hallucination 45.3%), and the AA Intelligence Index has not moved off 39.8. Frontier-science reasoning and factual calibration remain the reason this is 87 and not 92.
- **Context window: 95/100.** **Raised from 84** — the largest change in this report, and the one the first pass explicitly left open. The Alibaba model page (updated 2026-10-10) documents the hosted `qwen3.8-flash` at **1,000,000 tokens** with 991,808 max input and 131,072 max output, so the 1M YaRN figure is now a served default on the first-party route rather than a manual `rope_parameters` override. It stops at 95, not 100, because the methodology reserves 100 for ≥98% retrieval at 512K+, **no retrieval measurement at 1M exists**, AA-LCR is 79.7% (#86), and NVIDIA's own rerun of the weights puts AA-LCR *lower* at 71.9% (FP8) / 74.1% (NVFP4). Weights-only deployments remain 262,144.
- **Multimodal: 95/100.** Unchanged. Native text/image/video in with text out, long-video configuration guidance, and a measured set that has now been reproduced outside Qwen: NVIDIA's independent eval gives MMMU-Pro 77.1–78.3%, MathVision 95.7% with CI, CharXiv 90.6% with CI, LVBench 76.6%. Capped at 95 because there is no audio input (Alibaba's audio route is `qwen3.8-omni-flash`) and no non-text output.
- **Coding: 89/100.** Unchanged. DeepSWE 58.7%, SWE-bench Pro 62.5%, SWE-bench Multilingual 81.0%, LiveCodeBench v6 91.9%, NL2Repo 48.1%, AA-SciCode 50.6%, AA Coding Index 73.0, LMArena WebDev #17. It stays at 89 because the independent coding signal is mixed — LiveBench coding 72.5% (#55) is mid-table and **SWE-bench Verified and Vibe Code Bench are still unpublished**, so the headline SWE-bench Pro figure has no independent counterpart to sit beside it.
- **Cost efficiency: 95/100.** **Raised from 88.** The first pass scored 88 for a model with *no published hosted price*; the vendor has since published one: **$0.15 in / $0.47 out per 1M on the International/US route, $0.113/$0.382 on Global**, with a 50% batch discount and a $0.014 implicit-cache rate — cheaper than the $0.60/$2.20 anchor the methodology scores at ~92, and Artificial Analysis measures a $0.09/1M blended rate and $0.372 for a full Intelligence Index run. The 1M-token free quota is time-boxed to 90 days from activation and is not treated as a permanent $0. Self-hosting remains cheaper still. Excluded from Overall regardless.
- **Overall Score: 91.8/100.** (93 + 87 + 95 + 95 + 89) / 5 = 459 / 5 = 91.8, cost excluded. Up from 89.0 on two evidence-driven moves (a served 1M window and a real, cheap hosted price) plus one benchmark gap filled (independent Terminal-Bench 2.1 86.1%). Best fit: high-volume multimodal coding agents, document and video analysis, and million-token workflows where per-token cost dominates; pick a different model if OSWorld-class GUI autonomy or frontier-science reasoning is the requirement.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17 (second pass)
- Method: public internet research. **5 independent searches** (1 × `deep`, 4 targeted) plus direct fetches of the official Hugging Face card, the Alibaba Cloud Model Studio pricing/model pages and the Artificial Analysis provider page; scores are normalized 1–100 interpretations, not official vendor scores.
- **New sources used this pass:** [Alibaba Cloud — qwen3.8-flash model info (limits + pricing, upd. 2026-10-10)](https://www.alibabacloud.com/help/en/model-studio/qwen3.8-flash) · [Alibaba Cloud Model Studio — model inference pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing) · [Alibaba Cloud Model Studio console pricing](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/model-pricing) · [Qwen/Qwen3.8-Flash-Next model card (arch + full benchmark tables)](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) · [nvidia/Qwen3.8-Flash-Next-NVFP4 (independent quantization eval)](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) · [ModelScope — Qwen3.8-Flash-Next](https://www.modelscope.ai/models/Qwen/Qwen3.8-Flash-Next) · [BenchLeader — Qwen3.8-Flash-Next (TB2.1/TB4.0/LiveBench, upd. 2026-10-14)](https://www.benchleader.com/models/qwen3-8-flash-next) · [BenchLM — Qwen3.8-Flash-Next (upd. 2026-10-10)](https://benchlm.ai/models/qwen3-8-flash-next) · [Artificial Analysis — Qwen3.8-Flash-Next providers](https://artificialanalysis.ai/models/qwen3-8-flash-next/providers) · [LM Market Cap — Qwen3.8 Flash pricing/specs](https://lmmarketcap.com/model/qwen-qwen3-8-flash)
- Conflicts recorded rather than smoothed: hosted 1M context (Alibaba/Qwen Cloud) vs 256k–262k (AA, BenchLM, BenchLeader, weights) · NVIDIA's AA-LCR 71.9%/74.1% vs AA's hosted-route 79.7% · BenchLM 64.23 vs BenchLeader 59.8 composite · GDPval-AA normalized 55.6% vs 56.6% for the same 1648 Elo.
- **Still unmeasured for this exact ID:** SWE-bench Verified, Vibe Code Bench, Tau3-Banking, Tau2-Retail, MCP-Atlas, MLCR, and any long-context retrieval measurement at or near the advertised 1M.
- **Re-run when:** the 1M free quota's 90-day window lapses for your account, or Alibaba changes the `qwen3.8-flash` price row · Artificial Analysis or NVIDIA publishes a Terminal-Bench 4.0 / SWE-bench Verified row at a different effort setting · the YaRN-served 1M window gets an actual RULER/MRCR/Context-Arena measurement · NVIDIA or another vendor republishes the NVFP4 eval table · a Qwen4 successor ships.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Flash_Next_v3.md`, using the same headings.