# Qwen 3.8 Flash Next — findings by MiniMax M3

- Source: Alibaba Qwen Team (`Qwen/Qwen3.8-Flash-Next` / `qwen/qwen3.8-flash-next` / `opencode/qwen-3.8-flash-next`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's **2026** open-weights **125B-A6B MoE** (6B active per token, plus 51B N-gram Embedding component) **multimodal** (text + image + video → text) checkpoint **previewing the Qwen4 architecture**, released ahead of the production Qwen3.8-Flash. **262,144 native context / 1M via YaRN**. New architectural features: **Qwen Sparse Attention (QSA) with Gated DeltaNet** (3 of 4 layers use DeltaNet, 1 layer global attention), **Gated Residual** (4-branch + dynamic gates), **N-gram Embedding** (offloadable to host memory). Vendor: **SWE-bench Pro 62.5%**, **LiveCodeBench v6 91.9%**, **GPQA Diamond 91.7%**, **Terminal-Bench 2.1 86.1%**, **IFBench 81.3%**, **CoWorkBench 73.9%**. **AA Agentic Index** beats Kimi K3. Vercel pass-through **$0.12 / $0.40** per 1M.
- **Provider / access:** Hugging Face (Apache-2.0 / Qwen Community license weights, BF16 ~250 GB / 4-bit ~62-92 GB); ModelScope; Vercel AI Gateway ($0.12/$0.40); Alibaba Cloud Model Studio; OpenRouter. **No OpenCode Zen Free ID.**
- **Release / knowledge:** **2026** (mid-year; community runtime updates continuing through 2026-10-06). Knowledge cutoff not publicly disclosed.
- **IDs:** `Qwen/Qwen3.8-Flash-Next` (HF), `qwen/qwen3.8-flash-next` (OpenRouter, Vercel), `opencode/qwen-3.8-flash-next`.
- **Context window:** **262,144 native / 1,000,000 via YaRN**.
- **Modalities:** **Text + image + video in → text out.** Multimodal native; vision encoder built in. Documented in Transformers, vLLM, SGLang.
- **Pricing (as of 2026-10-16):** **Vercel AI Gateway $0.12 / $0.40** per 1M; **Alibaba Cloud Model Studio ~$0.16 / $0.47** for production Qwen3.8-Flash; **self-host = free** (Apache-2.0 weights). No Zen Free ID.
- **Architecture:** **Sparse MoE 125B total / 6B active** (4.8% activation) **+ 51B N-gram Embedding** (offloadable to host memory). 3 of 4 layers use **Gated DeltaNet** (linear attention compressing history), 1 of 4 uses global attention. **Gated Residual**: 4-branch residual stream with dynamic gates. Qwen Sparse Attention (QSA) selects important context at micro-block level.

### Raw benchmarks found

Triangulated across **six** independent surfaces: Alibaba official architecture post (Qwen Community blog + HF model card), Vercel AI Gateway pricing, AA Agentic Index (per @0xSojalSec X post: beats Kimi), Kie.ai hands-on review (Q3 2026), community runtime reports (M3 Ultra, M4 Max, RTX 4090, DGX Spark, RTX 5090), Strata local-deployment tooling, Reddit r/LocalLLM quantization reports. Most Alibaba numbers are vendor-attributed (Alibaba ran the rival columns) and *not yet independently reproduced on Vals / Epoch AI / LiveBench* for the Flash-Next variant specifically.

Agent / tool use:

- **Alibaba model card (vendor)**: **SWE-bench Pro 62.5%**, **Terminal-Bench 2.1 86.1%**, **LiveCodeBench v6 91.9%**, **GPQA Diamond 91.7%**, **IFBench 81.3%**, **CoWorkBench 73.9%**, **Arena 56** (per Ivan Fioravanti post).
- **AA Agentic Index (per @0xSojalSec)**: *beats Kimi K3* (Kimi K3 = 44) — implies a mid-40s AA Index, which is competitive with MiMo-V2.6-Pro 46, Grok 4.7 46.
- **Compression**: 2.39-bit quantization (92 GB) on single DGX Spark retains **95.5%** of original benchmarks (toolin.ai).
- **Community speed** (variable by hardware):
  - **Single 24GB RTX 4090**: ~21 t/s decode, 364 t/s prefill at 250K context.
  - **M4 Max**: 70 t/s serial, 98 t/s with MTP, 700 t/s prefill.
  - **M3 Ultra 512GB** (MLX-Serve, Ivan Fioravanti 2026-10-06): 131 t/s code, 110 t/s prose.
  - **M3 Ultra** (DwarfStar): ~65 t/s.
  - **Dual DGX Spark** (NEXTN speculative): 64 t/s single-stream, 117 t/s aggregate.
  - **Single DGX Spark 99GB NVFP4**: vision + video + 262K context preserved.
  - **RTX 5090 IQ_3S quant**: 150 t/s (KyleHessling1).
- **Reliability**: Mixed reports — @wtogami documented a failure mode where the model "repeatedly invented file-proxy URLs, received 403 responses, and left persistent context debris". Community flag: *intentionally under-trained research preview* (one review); *unusually verbose*.

Reasoning / knowledge:

- **GPQA Diamond (Alibaba vendor)**: **91.7%** — within 1.1 pt of GPT-5.4 (92.8), Opus 4.6 (91.3), GPT-5.2 (92.4). Top tier.
- **IFBench**: **81.3%** (instruction following).
- **AA Intelligence Index**: not surfaced directly in surveyed sources for Qwen 3.8 Flash Next, but the AA Agentic Index beats Kimi K3 (44), placing Flash Next in the 44-46 band — *open-weight frontier class*.

Coding:

- **SWE-bench Pro (Alibaba vendor)**: **62.5%** — vs Qwen 3.8 27B (61.7%), Qwen 3.6 Plus (56.6% vendor / 57.9% Epoch), GPT-5.4 (57.7%). *Frontier-class on agentic coding* with only 6B active parameters.
- **Terminal-Bench 2.1 (Alibaba vendor)**: **86.1%** — *exceptionally high*; trails only MiMo V2.6 Pro class; beats Qwen 3.6 Plus (53.2% Vals) by 33 pt on the *same benchmark*. *Not yet independently reproduced.*
- **LiveCodeBench v6 (Alibaba vendor)**: **91.9%** — frontier; trails only Qwen 3.8 27B (90.3%, similar); beats GPT-5.4 vendor SWE-Pro.

Multimodal:

- Text + image + video; documented in Transformers/vLLM/SGLang.
- **No public MMMU-Pro / MathVision / CharXiv** numbers for Flash-Next in surveyed sources.

Operational:

- **Quantization ladder**: BF16 ~250 GB; FP8 ~125 GB; Q4 ~62 GB; **2.39-bit ~92 GB** (with 95.5% retention). Fits a single DGX Spark or 64GB M5 Max (with offloading).
- **Offloading**: N-gram Embedding 51B offloadable to host RAM/SSD with async prefetch. Strata tool splits experts across GPU / system RAM / SSD on cards with 12GB+ VRAM.
- **Long-context prefill**: ~45 minutes for a single 256K prompt on M3 Ultra (community report — slow, but works).

Pricing compared to peers (current as of 2026-10-16):

- **Vercel $0.12/$0.40** is among the cheapest frontier-class hosted tiers — beats MiMo V2.6 Flash paid ($0.14/$0.28) on output by 0.7× but more on input 0.86×.
- **vs MiMo V2.6 Pro ($0.435/$0.87)**: Flash Next is **3.6× cheaper** input, **2.2× cheaper** output.
- **vs MiMo V2.6 Flash ($0.14/$0.28)**: Flash Next is **0.86× input** (cheaper), **1.43× output** (more).
- **vs Qwen 3.8 27B hosted ($0.50/$3.00)**: Flash Next Vercel is **4.2× cheaper** input, **7.5× cheaper** output.
- **vs GPT-5.4 ($1.25/$7.50 ≤272K)**: Flash Next is **10.4× cheaper** input, **18.75× cheaper** output.
- **vs Claude Opus 4.6 ($5/$25)**: Flash Next is **41.7× cheaper** input, **62.5× cheaper** output.
- **vs Grok 4.7 ($2/$6)**: Flash Next is **16.7× cheaper** input, **15× cheaper** output.
- **Self-host = $0** (Apache-2.0 weights) — only GLM-5.3 / Nemotron-3 / Qwen 3.5-9B / MiMo-V2.6-Distill-9B match this on the open-weights side.

### Normalized scores (1–100)

- **Tool use: 84/100.** **Terminal-Bench 2.1 86.1% (vendor)** is *the* headline — far above GPT-5.4 (Vals TB 2.1 78.2%), Qwen 3.6 Plus (Vals TB 2.1 53.2%), and MiMo V2.6 Flash (Alibaba TB 4.0 28.8%). **SWE-bench Pro 62.5%** is competitive with Qwen 3.8 27B (61.7%), Qwen 3.6 Plus (56.6%), GPT-5.4 (57.7%). **AA Agentic Index beats Kimi K3 (44)**. Caveat: *not yet independently reproduced on Vals/Epoch*; the 86.1% on TB 2.1 needs an independent harness check before being treated as definitive. CoWorkBench 73.9% is solid.
- **Reasoning: 80/100.** **GPQA Diamond 91.7% (vendor)** is *frontier-tier*, ties Opus 4.6 91.3%, trails GPT-5.4 92.8% by 1.1 pt. **AA Agentic Index mid-40s** (beats Kimi 44). IFBench 81.3% is strong. No public HLE / FrontierMath / ARC-AGI numbers — *research preview status* limits the published benchmark surface.
- **Context window: 90/100.** **262K native / 1M via YaRN** is *large* for a 6B-active MoE; matches Qwen 3.8 27B native 262K + 1M YaRN. QSA + Gated DeltaNet architecture targets long-sequence efficiency; quality at 256K is community-reported (Ivan Fioravanti: *evaluations still needed to determine whether QSA affects large-context understanding*) — a known caveat.
- **Multimodal: 80/100.** Text + image + video documented; runs vision at single DGX Spark 99GB NVFP4. No public MMMU-Pro / MathVision / CharXiv independent numbers in surveyed sources — *preview status* limits benchmark surface.
- **Coding: 86/100.** **SWE-bench Pro 62.5%** (frontier-class on agentic coding with only 6B active parameters — remarkable); **Terminal-Bench 2.1 86.1%** (vendor, not yet independent); **LiveCodeBench v6 91.9%** (frontier). All vendor-attributed. If reproduced, this is the *open-weight coding leader* below 100B active parameters.
- **Cost efficiency: 92/100.** **Vercel $0.12/$0.40** is *the* cheapest hosted frontier-class tier (ties with MiMo V2.6 Flash paid, beats MiMo Pro by 2-3×, beats Qwen 3.8 27B hosted by 4-7×). **Self-host = $0** (Apache-2.0) is the unbeatable price for the same model. Caveat: 6B active + 51B N-gram embedding means *real* hardware is 12-24GB VRAM minimum + host RAM/SSD for embeddings; not a "free on a Raspberry Pi" model.
- **Overall Score: 84/100** Half-up mean of the five non-cost dims: (84 + 80 + 90 + 80 + 86) / 5 = 420 / 5 = 84.0 → **84**. Best fit: **agentic coding on a budget** (SWE-bench Pro 62.5%, TB 2.1 86.1% if reproduced, at $0.12/$0.40 Vercel or self-hosted $0); **multimodal document analysis** (text + image + video at single-DGX-Spark deployment); **long-context workloads** (262K native + YaRN to 1M, QSA + Gated DeltaNet targeting long-sequence efficiency). Watch for: *preview status* — vendor benchmarks not yet independently reproduced; AA Agentic Index beats Kimi (mid-40s) is the strongest independent signal; *intentionally under-trained research preview* per one review; *unusually verbose*; reliability concern from @wtogami (file-proxy URL hallucination); long-context prefill 45 minutes at 256K on M3 Ultra. Twin file `Qwen_3.8_Flash.md` (the production Qwen3.8-Flash self-report, 2026-08-XX) gave **86** — my 84 is *below* the production Flash's averaged 86 because the *preview* status limits independent confirmation.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16
- Method: Six-source triangulation (Alibaba official architecture post + Qwen Community blog + HF model card, Vercel AI Gateway pricing, AA Agentic Index via @0xSojalSec X post, Kie.ai hands-on review, multiple community runtime reports from RTX 4090 / M3 Ultra / M4 Max / DGX Spark / RTX 5090 with quant and engine caveats). Identity resolved: this is **Alibaba Qwen3.8-Flash-Next** (open-weights 2026 release, Qwen Community license / Apache-2.0, 125B-A6B + 51B N-gram MoE, Qwen4 architecture preview) — *not* Qwen3.8-Flash (the production hosted version at $0.16/$0.47), *not* Qwen 3.8 Max (the 2.4T flagship), *not* Qwen 3.8 27B (dense Apache-2.0 distillation). Scores are normalized 1–100 interpretations, not official vendor scores. The Alibaba vendor benchmarks (SWE-bench Pro 62.5%, TB 2.1 86.1%, LiveCodeBench 91.9%, GPQA 91.7%) are *vendor-attributed and not yet independently reproduced*; AA Agentic Index beating Kimi K3 (44) is the strongest independent signal.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

