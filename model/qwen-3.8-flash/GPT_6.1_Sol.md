# Qwen3.8 Flash — findings by GPT 6.1 Sol

- Source: Alibaba / hosted `qwen3.8-flash`, based on Qwen3.8-Flash-Next
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash
- **Short description:** Alibaba's low-cost hosted multimodal reasoning model for coding, visual understanding and agent workflows. The official Flash-Next card explicitly identifies Flash as its production hosted version; hosted service features and local checkpoint settings remain distinct [S1,S2].
- **Provider / access:** QwenCloud supports OpenAI and Anthropic protocols; its example uses `https://ap-southeast-1.maas.qwencloudapi.com/compatible-mode/v1` with Chat Completions. OpenRouter offers `qwen/qwen3.8-flash` via Chat Completions; OpenCode lists `opencode/qwen3.8-flash` via `https://opencode.ai/inference/anthropic/v1/messages` [S1,S3,S6]. Responses-based built-in tools are documented separately; protocol compatibility does not make all tool features identical.
- **Release / knowledge:** August 26, 2026 hosted listing, independently recorded by OpenRouter and AA; a training cutoff was not verified [S3,S4].
- **IDs:** QwenCloud `qwen3.8-flash`; OpenRouter snapshot `qwen/qwen3.8-flash-20260826`; open checkpoint `Qwen/Qwen3.8-Flash-Next`. No free hosted Flash route verified. The project's hyphenated folder spelling is not the vendor API ID.
- **Context window:** QwenCloud advertises **1M** total, rounded **991K** maximum input or **983K** thinking input, **131K** maximum output, and **262K** maximum reasoning. OpenRouter specifies **1,000,000** context, **983,616** maximum prompt and **131,072** maximum completion tokens [S1,S3]. These are simultaneous service constraints, not additive capacities. Open weights are **262,144** native, extensible to **1,000,000** with YaRN [S2].
- **Modalities:** Text/image/video input and text output; reasoning can be disabled, function calling, structured output, streaming and caching. PDF parsing, web search and code interpreter are documented service tools rather than separate native output modalities. No native audio or non-text generation established for Flash [S1–S3].
- **Pricing (as of 2026-10-20):** **$0.15 input / $0.47 output per 1M tokens**, cache reads **$0.016**, explicit cache creation **$0.20**, consistent across QwenCloud, OpenRouter and OpenCode [S1,S3,S6]. AA independently lists the same input/output price and approximately **$0.37 per Intelligence Index task** [S4]. Downloadable weights do not make self-hosted compute free.
- **Architecture:** Officially based on Flash-Next: hybrid Gated DeltaNet/Qwen Sparse Attention MoE with gated residuals and n-gram embeddings. The checkpoint card specifies **125B** main parameters, **6B** activated, plus **51B** n-gram embeddings and **4B** MTP; AA/Hugging Face count approximately **180B** total. Those totals use different inclusion conventions, not different active compute [S2,S4]. The checkpoint uses **Qwen Community License 1.0**, not Apache 2.0; commercial MaaS/AI Work Assistant uses have separate licensing provisions [S7]. Exact hosted quantization is not disclosed in the inspected provider endpoint.

### Raw benchmarks found

#### Identity and measurement applicability

Three independently inspectable links support this assessment:

1. The official [checkpoint card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) states: “Qwen3.8-Flash is the official version based on Qwen3.8-Flash-Next” and links to the exact hosted product [S2].
2. [OpenRouter's Flash page](https://openrouter.ai/qwen/qwen3.8-flash/benchmarks) links its “Model weights” to that checkpoint; its machine-readable catalog sets `hugging_face_id` to `Qwen/Qwen3.8-Flash-Next` [S3].
3. The HTML page data on [AA's provider page](https://artificialanalysis.ai/models/qwen3-8-flash-next/providers) explicitly contains `"label":"Qwen3.8-Flash-Next","hostApiId":"qwen3.8-flash"` and provider `Alibaba Cloud` [S5]. Thus AA's independently measured hosted result is attributable to the actual Flash endpoint despite the evaluator's checkpoint-style display name.

Official checkpoint benchmarks below retain their measured **Flash-Next** label. They are supporting evidence for the vendor-linked underlying model, not claimed fresh reruns of every hosted configuration. AA supplies the crucial independently measured hosted-model anchor.

Agent / tool use:

- Toolathlon Verified (Flash-Next, vendor): **73.5% pass@1** [S2].
- CoWorkBench (Flash-Next, vendor in-house): **73.9%**; JobBench **55.7%** [S2]. In-house results are not independent replication.
- Agents' Last Exam (Flash-Next, vendor): **24.3% pass@1 / 51.2 score** [S2]. The score is not a 51.2% task pass rate.
- OSWorld 2.0 (Flash-Next, vendor): **19.4% binary / 52.3 partial**; AndroidWorld **84.5%** [S2]. Partial credit is not interchangeable with binary completion.
- GDPval-AA: **1648 Elo**, reported by [BenchLM](https://benchlm.ai/models/qwen3-8-flash-next) with attribution to AA [S8]. Retained as a secondary attribution; the inspected AA text did not expose that exact figure.
- Terminal-Bench 2.1 / Tau3-Banking / MCP-Atlas: no directly verified numerical result in the inspected primary card or rendered AA summary. No estimated percentage substituted.
- ClawEval-MM (Flash-Next, vendor): **64.4% pass@3 / 60.4 average score** [S2]. This is a multimodal suite and not generic Claw-Eval pass@1.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **40**, current **v4.3.2**, independently measured; provider attribution resolves to Alibaba `qwen3.8-flash` [S4,S5]. This is an index, not 40% accuracy.
- BenchLM reports AA index **39.8** and its own aggregate **62.86/100**, rank **44/956**, updated October 19 [S8]. The 39.8/40 difference is compatible with rounding; 62.86 is a different composite and is not averaged with AA.
- GPQA Diamond (Flash-Next, vendor): **91.7%**; HLE **35.9%**, judged by GPT-4o [S2].
- BenchLM's AA-attributed GPQA **92.3%**, HLE **38.0%**, CritPt **11.1%**, Omniscience accuracy **24.5%** and hallucination rate **45.3%** are secondary reports [S8]. The rendered AA page did not independently expose those individual values, so they are lower-confidence cross-checks, not separate independent reruns or replacements for the card results.
- No verified MLCR result found. No claim that all reasoning tasks reach GPQA-level accuracy.

Coding:

- SWE-bench Pro (Flash-Next, vendor): **62.5%**, Claude Code, temperature **1.0**, top-p **0.95**, **256K** context, corrected/refined tasks and re-evaluated baselines [S2]. Not directly interchangeable with unmodified SWE-Pro leaderboards.
- SWE-bench Multilingual (Flash-Next, vendor): **81.0%**, mini-SWE-agent with the same temperature/top-p/context settings [S2].
- DeepSWE 1.1 (Flash-Next, vendor): **58.7%**, best result across Claude Code and mini-SWE-agent, with mini-SWE-agent winning for this model [S2]. Selecting the best harness is a material methodological qualification.
- LiveCodeBench v6 (Flash-Next, vendor): **91.9%**; NL2Repo **48.1%**, Claude Code with repository-access/download restrictions [S2]. Algorithmic coding and complete repository work remain different tasks.
- SciCode **50.6%** and AA Coding Index **73.0** appear as AA-attributed secondary values on BenchLM [S8], not independently read from AA's rendered score table.
- Vibe Code Bench / SWE Atlas Codebase QnA: no verified public score found in inspected material.

Long context:

- Hosted **1M** context is confirmed by QwenCloud, OpenRouter and the AA provider comparison [S1,S3,S5]. AA's model-summary page says **256K**, consistent with the checkpoint's native length rather than the provider limit [S2,S4].
- AA-LCR **79.7%** is reported secondarily by BenchLM [S8]. No inspected first-party MRCR/RULER measurement establishes **98% retrieval at 512K+**, and that LCR percentage must not be presented as a full-million-token retrieval result.
- Official YaRN notes warn static scaling can affect shorter-context performance [S2]. A larger configured window alone does not demonstrate stable quality throughout that window.

Multimodal:

- Flash-Next card: LVBench **76.6%**, ERQA **72.3%**, RealWorldQA **88.5%**, Vision2Web **64.0%** [S2].
- MathVision **90.6% without / 95.7% with code interpreter**; CharXiv **84.6% without / 90.6% with code interpreter** [S2]. MathVision uses corrected annotations and a fixed prompt; other models receive the higher of two prompt variants. Tool-assisted values are not native unaided perception scores.
- BenchLM reports AA MMMU-Pro **79.8%** secondarily [S8]; no native audio or image-generation result established.

### Search audit and evidence reconciliation

Fresh searches, performed before reading my previous excluded report:

1. [Bing: `"Qwen3.8-Flash" benchmark`](https://www.bing.com/search?q=%22Qwen3.8-Flash%22+benchmark&setlang=en&cc=us) — unrelated Chrome results, discarded.
2. [Google: `"Qwen 3.8 Flash" official model card`](https://www.google.com/search?q=%22Qwen+3.8+Flash%22+official+model+card&hl=en) — JavaScript interstitial, no evidence extracted.
3. [Brave: `"qwen3.8-flash" independent review`](https://search.brave.com/search?q=%22qwen3.8-flash%22+independent+review) — HTTP 429.
4. [Official-publisher Hugging Face search](https://huggingface.co/api/models?author=Qwen&search=Qwen3.8-Flash&limit=10) — found Flash-Next and FP8 repositories; followed their official hosted-product relationship.

Direct multi-site investigation supplied the usable evidence despite search-engine limitations. Guessed bare-Flash AA/BenchLM/Vals pages returned 404; resolving the evaluator's actual Flash-Next page and inspecting `hostApiId` overcame that gap. A missing guessed URL never established model nonexistence.

The central conflict is naming and configuration, not a reason to silently combine every sibling. Hosted Flash has verified 1M limits; open Flash-Next is 262K native. Vendor card measurements and evaluator measurements retain separate labels, effort/harness qualifications and source provenance. BenchLM's copies of vendor scores are not counted as independent confirmation. Parameters including embeddings explain 125B versus 180B. AA's **54.5 tokens/s** and **240M** evaluation output tokens caution against equating low token prices with low latency or minimal total usage [S4,S5].

### Normalized scores (1–100)

These are editorial interpretations under the repository's dimension tiers, not vendor percentages. Independent hosted evaluation supports the assessment; underlying-checkpoint scores supplement it with the qualifications above.

- **Tool use: 86/100.** Vendor-linked Toolathlon 73.5%, varied agent benchmarks and real API tool support indicate strong agent utility; 19.4% binary OSWorld completion and incomplete exact-route tool-suite coverage cap the score.
- **Reasoning: 86/100.** Independent hosted AA index 40 and vendor-linked GPQA 91.7% / HLE 35.9% support strong reasoning; cross-suite inconsistency, verbosity and lack of top-tier reliability evidence prevent a frontier maximum.
- **Context window: 95/100.** Three service/evaluator sources verify a 1M hosted window, meeting the 95–100 tier; no verified 98% retrieval at 512K+ supports raising it to 100.
- **Multimodal: 85/100.** Verified image/video input plus supporting chart/video tests meet the visual-input tier; no native audio or non-text output, and endpoint/checkpoint measurement differences, cap breadth.
- **Coding: 88/100.** Vendor-linked SWE-Pro 62.5%, DeepSWE 58.7% and LiveCodeBench v6 91.9% show substantial coding skill; best-harness selection, refined SWE tasks and the gap between contest and repository performance cap confidence.
- **Cost efficiency: 97/100.** Verified $0.15/$0.47 paid pricing and AA's $0.37/task are highly economical; substantial reasoning-token usage and paid serving keep this below the $0 tier's 100.
- **Overall Score: 88/100.** Half-up mean of the five quality dimensions: `(86 + 86 + 95 + 85 + 88) / 5 = 88`; cost excluded. Best fit: cost-sensitive multimodal coding/agent workflows where long context matters and latency/verbosity can be monitored.

### Sources

- [S1] https://www.qwencloud.com/models/qwen3.8-flash — exact hosted API, features, limits and prices.
- [S2] https://huggingface.co/Qwen/Qwen3.8-Flash-Next — official hosted relationship, architecture, benchmark values and detailed harness caveats.
- [S3] https://openrouter.ai/api/v1/models/qwen/qwen3.8-flash/endpoints and https://openrouter.ai/qwen/qwen3.8-flash/benchmarks — exact route, snapshot, serving constraints and weights link; https://openrouter.ai/api/v1/models supplies `hugging_face_id`.
- [S4] https://artificialanalysis.ai/models/qwen3-8-flash-next — independent hosted intelligence/speed/cost evaluation, current index version and checkpoint-style naming.
- [S5] https://artificialanalysis.ai/models/qwen3-8-flash-next/providers — Alibaba provider and 1M configuration; embedded page data explicitly identifies `hostApiId: qwen3.8-flash`.
- [S6] https://opencode.ai/docs/zen/ — current provider route, Anthropic Messages endpoint and pricing.
- [S7] https://huggingface.co/Qwen/Qwen3.8-Flash-Next/blob/main/LICENSE — official Qwen Community License 1.0.
- [S8] https://benchlm.ai/models/qwen3-8-flash-next — secondary benchmark collection, coverage and index comparison, updated 2026-10-19; attributed submetrics are not claimed independently replicated here.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20
- Method: Sequential, independent public-web research with three search engines plus official-publisher search; direct official cards/service docs, exact provider API inspection, independent AA evaluation and page-data identity resolution, and secondary-source conflict comparison. Previous own excluded report was inspected only after drafting. Newly verified endpoint-to-evaluator mapping resolves its prior missing-evidence conclusion. Scores are normalized interpretations, not official vendor scores.
