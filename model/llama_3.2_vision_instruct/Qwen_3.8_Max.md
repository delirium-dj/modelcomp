# Llama 3.2 Vision Instruct — findings by Qwen 3.8 Max

- Source: Meta (`meta-llama/Llama-3.2-11B-Vision-Instruct`; id `meta-llama/Llama-3.2-11B-Vision-Instruct`; **no AA page** — `artificialanalysis.ai/models/llama-3-2-11b-vision-instruct` 404, delisted)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** Meta's **first vision-capable Llama** — the **11B** small vision LLM released **25 Sep 2024** (knowledge cutoff Dec 2023) under the **Llama 3.2 Community License** (with an EU multimodal restriction). Architecturally it is the **Llama 3.1 8B text backbone + a cross-attention image adapter + SigLIP encoder** (LM weights frozen), a **drop-in text replacement** that adds **image understanding** — **text + image in → text out**, **no audio, no native video** (video only via frame-sampling evals). At launch it was pitched as competitive with **Claude 3 Haiku / GPT-4o-mini** on image tasks and remains a capable **document/chart/diagram reader** (**DocVQA 88.4, AI2D 91.1, ChartQA ~74, MMBench ~79, MMMU 50.7, RealWorldQA ~64**). But it is a **2024-era, non-reasoning, dense** model with a **hard 4,096-token output cap** and **weak abstract reasoning/coding by 2026 standards**, and it has been **delisted by Together, Groq, Cerebras and OpenRouter** (both sizes). **No Artificial Analysis page exists** (Intelligence Index / Speed / Cost all N/A) — no independent composite. **Guards:** this is the **11B Vision Instruct**, distinct from the **90B Vision** (higher scores) and from the **text-only 1B/3B** Llama 3.2 models — none of their numbers are credited here.

## Model card

- **Name:** Llama 3.2 Vision 11B Instruct (`meta-llama/Llama-3.2-11B-Vision-Instruct`)
- **Short description:** A **multimodal image-understanding** model from Meta's Llama 3.2 herd, "optimized for visual recognition, image reasoning, captioning, and answering general questions about an image." The **LM parameters are intentionally frozen** during vision training, so text capability matches the Llama 3.1 8B base — it is a **drop-in** for the text model that adds an image channel.
- **Provider / access:** **Open weights** (llama.com / Hugging Face, gated), **Llama 3.2 Community License**. Day-one partner ecosystem (AWS, Azure, Google Cloud, Groq, Together, Fireworks, NVIDIA, Cloudflare, Ollama…). ⚠️ **Now delisted by Together, Groq, Cerebras and OpenRouter**; remaining hosted: Cloudflare Workers AI, io.net, DeepInfra, etc. `noFreeId: true`.
- **Release / knowledge:** Released **25 September 2024** (Connect 2024). **Knowledge cutoff December 2023.** Legacy by the 2026 roster.
- **IDs:** `meta-llama/Llama-3.2-11B-Vision-Instruct` (HF). Cloudflare slug `llama-3.2-11b-vision-instruct`.
- **Context window:** **128,000 total**, **4,096 max output** (the output cap is a hard, well-known limitation). Matches meta.
- **Modalities:** **Text + image in → text out.** **Image-only vision** — **no audio input, no native video** (VideoMME/MVBench run by feeding frames). **NOT** a full audio/video VLM.
- **Pricing:** **Open weights, self-host $0**; hosted **~$0.0485–$0.35/M in, ~$0.055–$0.676/M out** depending on provider/size (Cloudflare low end; io.net 90B high; DeepInfra ~$0.345/$0.345). Availability is shrinking (delistings).
- **Architecture:** **Dense transformer, 11B params** = Llama 3.1 8B text backbone + **SigLIP image encoder + cross-attention adapter** (LM frozen); **BF16 weights**; **non-reasoning** (no chain-of-thought mode — that arrived with Llama 3.1 "thinking"-style/4.x). Fine-tunable via torchtune, local via torchchat.

### Raw benchmarks found

> **Provenance: Meta's official model card / Llama 3.2 blog (vendor)** for the vision + text benchmark set (the blog publishes tables as images; individual scores corroborated by the HF model card and third-party listings — curated meta + OpenRouter/NVIDIA). **No Artificial Analysis page (404, delisted)** → no independent Intelligence Index / Speed / Cost. Evals are **2024-vintage**; treat absolute standing as legacy-era.

**Vision / multimodal (vendor — the model's purpose; strong on documents, mid on abstract):**
- **DocVQA (9p): 88.4%** · **AI2D: 91.1%** · **ChartQA: ~74%** · **MMBench-Test: ~79%** — genuinely good **document / chart / diagram reading**, its designed strength.
- **MMMU (Val): 50.7%** · **RealWorldQA: ~64%** · **MathVista (Mini): ~45%** · **InfoVQA: ~48%** — **mid-to-weak on abstract/college-level visual reasoning and visual math** by 2026 standards. (90B sibling scores higher — **not credited**.)
- **VideoMME / MVBench** evaluated only by frame-sampling — **no native video or audio pipeline**.

**Reasoning / knowledge (vendor text-side — modest, non-reasoning):**
- Inherits the **Llama 3.1 8B** text profile (LM frozen): solid general instruction-following/summarization but **no extended-reasoning mode**; abstract-reasoning suites (GPQA-class) land **low-to-mid** for its era. MMMU 50.7 is the best available proxy for visual reasoning — clearly not frontier.

**Coding (vendor text-side — legacy mid, not a coding model):**
- **HumanEval / MBPP** match the Llama 3.1 8B base (functional but well below 2026 agentic coders); no SWE-bench / Terminal-Bench reported for the vision variant. Weak as a coding agent.

**Agent / tool use:**
- Text 1B/3B Llama 3.2 support lightweight tool calling, but the **Vision 11B is an image-QA model, not an autonomous agent**; no τ-bench / BFCL / Terminal-Bench published. Agentic capability is minimal.

**Long context:**
- **128K window** is generous, but the **4,096-token output cap** throttles long-form generation — a first-order practical limitation for summarization/agent transcripts. No MRCR-style retrieval benchmark.

> **Self-reported vs independent:** quality numbers are **Meta-vendor** (model card / blog); **no AA composite exists** (page delisted/404). The vision scores are credible and widely reproduced, but reflect **2024-era** capability now substantially outclassed.

### Normalized scores (1–100)

- **Tool use: 46/100.** Inherited Llama-3.1-class function calling exists in the ecosystem, but this is an **image-QA model, not an agent** — no agentic benchmarks, weak autonomy ceiling, and a 4K output cap that breaks multi-step transcripts.
- **Reasoning: 45/100.** **Non-reasoning** dense 8B-base; **MMMU 50.7 / MathVista ~45 / RealWorldQA ~64** show mid visual-perception but thin abstract reasoning by 2026; no independent index (AA N/A).
- **Context window: 60/100.** A real **128K** input window is a plus, but the **hard 4,096 max-output** limit and lack of long-retrieval evidence cap its practical context utility.
- **Multimodal: 64/100.** Its genuine reason to exist: **strong document/chart/diagram reading** (**DocVQA 88.4, AI2D 91.1, ChartQA ~74, MMBench ~79**), but **image-only — no audio or native video**, and mid on abstract visual reasoning — capable for its class, legacy in absolute terms.
- **Coding: 50/100.** Tracks the Llama 3.1 8B text base (HumanEval-class); fine for snippets, **far below current agentic coders**, and no repo-level benchmark for the vision variant.
- **Cost efficiency: 74/100.** **Open weights self-host $0** and low hosted per-token rates ($0.05–0.35), but **delisted by Together/Groq/Cerebras/OpenRouter** — cheap where still served, shrinking availability. *(Scored; not counted in Overall.)*
- **Overall Score: 53/100.** Half-up mean of the five quality dims (46 + 45 + 60 + 64 + 50)/5 = **265/5 = 53.0 → 53**. **Curated `average.md` = 59.7 → div −6.7** (a deliberate downward divergence: the report penalizes the **legacy non-reasoning text backbone**, the **hard 4K output cap**, the **absence of audio/video despite "vision" branding**, and the **broad delistings**, crediting only the document/chart reading as its real, dated strength).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**Meta Llama 3.2 blog** 2024-09-25 — first Llama vision models **11B + 90B**; **architecture = Llama 3.1 8B text backbone + SigLIP encoder + cross-attention adapter, LM frozen** (drop-in text replacement); competitive-with-Claude-3-Haiku/GPT-4o-mini positioning; **128K context, 4K max output**; **BF16 weights**; **Llama 3.2 Community License**; **HF model card / ModelScope mirror** — "optimized for visual recognition, image reasoning, captioning"; curated meta + OpenRouter/NVIDIA listings for **DocVQA 88.4, AI2D 91.1, ChartQA ~74, MMBench ~79, MMMU 50.7, RealWorldQA ~64, MathVista ~45**; **AA `llama-3-2-11b-vision-instruct` = 404 (delisted — no Intelligence/Speed/Cost)**; delisting note (Together/Groq/Cerebras/OpenRouter) per curated meta tradeoff). Curated meta verified — id `Llama-3.2-11B-Vision-Instruct` / Sep-2024 / 11B / 128K + 4K-out / text+image in→text out / DocVQA 88.4 / AI2D 91.1 / MMMU 50.7 / Llama 3.2 Community License / now widely delisted **all confirmed**.)
- Future sources: if any neutral host re-lists the 11B Vision and reproduces its DocVQA/MMMU set, or if a current VLM leaderboard (MMMU-Pro, OpenVLM) places it independently, update. **Guard against** (a) crediting the larger **Llama 3.2 90B Vision** (higher scores) or the **text-only 1B/3B** Llama 3.2 numbers to the 11B Vision, (b) treating **frame-sampled VideoMME/MVBench** as native video support (**image-only, no audio/video**), (c) inferring a reasoning mode — it is a **non-reasoning** 8B-lineage dense model, and (d) overlooking the **hard 4,096-token output cap** as a first-order practical limit.
