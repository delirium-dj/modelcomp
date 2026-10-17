# Xing4.0-29B-A4B — findings by Space Bunny

- Source: China Telecom AI / TeleAI (`XingChen-AGI/Xing4.0-29B-A4B`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing4.0-29B-A4B
- **Short description:** China Telecom Artificial Intelligence Technology (TeleAI, formerly TeleChat)'s 29B-total / 4B-active sparse Mixture-of-Experts model, purpose-built for the "agentic era" — planning multi-step task paths, calling tools and delivering completed work rather than answering questions. Its headline claim is deployment economics: **15 GB of GPU memory**, i.e. a single consumer graphics card, with full local privacy control. It is the successor to the TeleChat line and, per China Telecom, the first ~10B-scale model trained entirely on domestic Chinese hardware and software stacks.
- **Provider / access:** Hugging Face `XingChen-AGI/Xing4.0-29B-A4B` (**Apache-2.0**, 62.4 GB BF16 checkpoint) and ModelScope, first commit and weight upload **2026-09-16**; commercial API listings appeared 2026-10-15/16 with a **free promotional tier** on OpenRouter (`xingchen-agi/xing4.0-29b-a4b:free`, max output 235.9K) and a paid route alongside it. Officially announced 2026-09-22/24 via GlobeNewswire, TechCrunch press release, Markets Insider and Manila Times. Not on OpenCode Zen. ModelScope explicitly lists **OpenCode, Claude Code, OpenClaw and Hermes** as adapted agent frameworks.
- **Release / knowledge:** weights 2026-09-16; formal release 2026-09-22/24; API availability mid-October 2026. Knowledge cutoff not published. The `XingChen4` → `Xing4_0` HF rename happened during the pre-release period and leaked-pipeline coverage tracked it before the weights existed.
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B` (weights), `xingchen-agi/xing4.0-29b-a4b` and `xingchen-agi/xing4.0-29b-a4b:free` (OpenRouter).
- **Context window:** **256K native (262,144 on commercial listings), extendable to 512K** per the vendor model card.
- **Modalities:** **text in, text out only.** Reasoning, tool/function calling and JSON structured output supported; no image, video or audio. It is a pure language model — China Telecom's framing is "complex engineering tasks," not document vision, despite the group customer-service deployment.
- **Pricing (as of 2026-10-17):** **$0.40 input / $1.20 output per 1M** on the paid commercial route, plus a **free promotional tier on OpenRouter**. Weights are **Apache-2.0** and free. Self-hosting at low-bit quantization fits **15 GB of GPU memory** — the pricing argument for this model is that the marginal cost of a local agent can approach electricity.
- **Architecture:** sparse MoE, **29B total / 4B active per token**; 40 layers; hidden size 3,584; dense FFN intermediate 9,216; expert intermediate 1,024; **64 routed experts with 4 activated plus 1 always-on shared expert**; **MLA (Multi-head Latent Attention)** — DeepSeek-lineage compressed-KV attention rather than GQA; `mHC + MLA + MTP` stack with Multi-Token Prediction; vocab 131,072. Quantized builds caught up 2026-10-13; SGLang support merged from draft, vLLM already supported the architecture.

### Raw benchmarks found

> All figures below are **China Telecom's own model card** (ModelScope / Hugging Face), which publishes them **side by side with two same-size competitors** — Gemma4-26B-A4B and Qwen3.6-35B-A3B — on an identical harness. That internal control is the most useful feature of this evidence set. **No independent third-party rerun of any of these numbers was found**, and Xing4.0-29B-A4B does not appear on Artificial Analysis, BenchLM or Vals AI.

Coding:

- **SWE-bench Verified: 75.00%** — ahead of Gemma4-26B-A4B (53.00) and just behind Qwen3.6-35B-A3B (76.00). China Telecom's press materials repeat this as "ranking among the top models in its parameter class." **A 75% SWE-bench Verified from a 4B-active model would be the standout result in this entire dataset if independently confirmed — and it is currently vendor-only.**
- SWE-bench Multilingual: **66.00%** (Gemma4-26B-A4B 51.00, Qwen3.6-35B-A3B 67.20)
- Terminal-Bench 2.1: **57.50%** — well ahead of Gemma4-26B-A4B (30.00) and Qwen3.6-35B-A3B (51.50)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Agent / tool use:

- Tau3-Bench: **64.63%** (Gemma4-26B-A4B 58.90, Qwen3.6-35B-A3B 67.20)
- Claw-Eval: **76.55%** — the best of the three (Gemma4-26B-A4B 71.49, Qwen3.6-35B-A3B 74.54)
- DeepresearchBII: **60.80%** (Gemma4-26B-A4B 39.30, Qwen3.6-35B-A3B 59.70)
- IFBench: **69.67%** (Gemma4-26B-A4B 72.67, Qwen3.6-35B-A3B 65.50)
- MCP-Atlas / Toolathlon / GDPval-AA / Tau2 / WebArena: no verified public score found
- Production evidence: deployed in China Telecom's group customer-service platform for multi-step reasoning and tool-calling workflows, with claimed improvements in first-contact resolution and average handling time — **no numbers published**

Reasoning / knowledge:

- **AIME 2026: 90.00%** (Gemma4-26B-A4B 88.30, Qwen3.6-35B-A3B 92.70) — competitive with a 35B/3B model at a quarter of the active parameters
- GPQA Diamond, HLE, MMLU-Pro, CritPt, Artificial Analysis Intelligence Index, Omniscience/hallucination: **no verified public score found** — none of these were run, published or independently indexed

Long context:

- **AA-LCR: 61.00%** (Gemma4-26B-A4B 66.00, Qwen3.6-35B-A3B 62.00) — mid-pack for its class, and one of the two benchmarks where it loses to both comparators
- 256K native, extendable to 512K. No MRCR / RULER / GraphWalks figure published

Multimodal:

- **None.** Hugging Face tags are `Text Generation / Transformers / Safetensors`; ModelScope and OrcaRouter both describe it as a language model; no vision-language head, no image benchmark.

Speed / deployment:

- 15 GB GPU memory with low-bit quantization and memory optimization — runs on a single consumer graphics card alongside other applications
- Deployed for local use cases requiring "complete privacy control"
- No independent tokens/sec or latency measurement was found; there is no Artificial Analysis or OpenCode Data performance entry

### Normalized scores (1–100)

- **Tool use: 80/100.** Unusually strong for a 4B-active model: **Tau3-Bench 64.63%**, **Claw-Eval 76.55%** (best in its comparison group), DeepresearchBII 60.80% and IFBench 69.67%, plus a documented production tool-calling deployment at China Telecom. Held to 80 rather than higher because every number is vendor-reported on an unpublished harness, there is no MCP-Atlas or Tau2 row from any independent tracker, and the press release's central claims ("performs strongly across a range of core benchmarks," "measurably improved first-contact resolution rates") ship **without figures**.
- **Reasoning: 76/100.** AIME 2026 at **90.00%** is a genuinely strong number that lands between Gemma4-26B-A4B (88.30) and Qwen3.6-35B-A3B (92.70) at a quarter of the active parameter count, and it suggests real math reasoning rather than pure pattern-matching. Capped at 76 because **AIME 2026 is the only reasoning or knowledge benchmark published** — no GPQA, no HLE, no MMLU-Pro, no hallucination rate, no Artificial Analysis index exists for this model, so the dimension rests on a single data point.
- **Context window: 76/100.** A real **256K native window (262,144 as listed commercially), extendable to 512K** per the vendor card, with AA-LCR measured at 61.00%. Solid in absolute terms. Capped because 256K is well short of the 1M tier occupied by Opus 4.7, Beam, Kimi K3 and Nemotron 3.5 Super VL, the 512K extension is a vendor claim with no measurement behind it, and AA-LCR at 61% is the one benchmark in the card where Xing loses to both comparators.
- **Multimodal: 15/100.** **Text-only**, confirmed by the Hugging Face tag set, ModelScope, and the OrcaRouter model description. No vision head, no image benchmark, no audio. Nothing supports scoring this above the text-only floor — the enterprise customer-service deployment does not change the modality set.
- **Coding: 82/100.** The headline: **SWE-bench Verified 75.00%**, which would place this 29B/4B model within a point of Qwen3.6-35B-A3B and 22 points above Gemma4-26B-A4B, reinforced by **Terminal-Bench 2.1 57.50%** (best of the three, 7 points clear of Qwen3.6) and **SWE-bench Multilingual 66.00%**. That is an elite coding profile for the parameter class. Marked down from 90 purely on evidence: it is one vendor's numbers on one harness, no independent lab has reproduced any of it, and China Telecom's own comparison conveniently omits every model with more than 36B total parameters — where the field's real SWE-bench scores live (GLM-5 77.8, Grok 4.5 86.6 on the Vals harness, Beam 81.6).
- **Cost efficiency: 92/100.** The strongest dimension and the model's entire purpose: **$0.40 / $1.20 per 1M** hosted, a **free OpenRouter tier**, **Apache-2.0** weights, and a **15 GB / single-consumer-GPU** footprint with claimed full local privacy. For on-prem agent deployments that is better than almost anything else in this dataset, and it undercuts even Nemotron 3.5 Super VL ($0.23/$0.57 is close on price, but Super VL needs a datacenter GPU while this fits on a desktop card). The only mark-down is that no hosted price card was published by China Telecom itself — the $0.40/$1.20 figures come from third-party listings of the OpenRouter route.
- **Overall Score: 66/100.** Mean of the five non-cost dims (80 + 76 + 76 + 15 + 82) / 5 = 65.8, half-up to 66. Best-fit recommendation: an excellent **text-only local agent** for privacy-sensitive, budget-conscious deployments on a single GPU — but treat every benchmark above as a vendor claim until an independent lab reruns it, and do not read "SWE-bench Verified 75" as comparable to frontier-model scores obtained on public harnesses.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17
- Method: public internet research across China Telecom AI's own ModelScope model card (the primary source for the nine-benchmark comparison table against Gemma4-26B-A4B and Qwen3.6-35B-A3B, and for the full architecture specification), the Hugging Face `XingChen-AGI/Xing4.0-29B-A4B` repository (Apache-2.0 licence, 62.4 GB size, framework tags, timeline), the GlobeNewswire press releases of 2026-09-22 and 2026-09-24, TechCrunch and Markets Insider press-release coverage, the Manila Times syndication, the OrcaRouter launch analysis (weights 2026-09-16 vs API mid-October, the `XingChen4` → `Xing4_0` rename history, commercial listing at 262,144 context with a free tier, SGLang/vLLM status, and its explicit list of what remains unverified), the OpenRouter free-tier listing, and TokenMojo's price record. The absence of any Artificial Analysis, BenchLM, Vals AI or OpenCode Data entry is recorded as an evidence limitation rather than papered over; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.