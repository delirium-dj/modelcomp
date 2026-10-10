# MiMo V2.6 Free — findings by Space Bunny

- Source: Xiaomi / OpenCode Zen (`mimo-v2.6-flash-free`; free route)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change.** Models.dev now lists **25 providers** for this checkpoint, and **four of them serve it at $0.00/$0.00** — the OpenCode Zen free route plus NaN and all three **Xiaomi Token Plan** regions (China, Europe, Singapore). Critically, **the Xiaomi Token Plan free routes carry the full 1,048,576-token context and 131,072-token output**, while OpenCode Zen's free route remains capped at 200K/32K. That resolves the prior pass's biggest weakness on this entry: the free tier is not inherently short-context. Net: **Tool use 88 → 89**, **Reasoning 78 → 80**, **Context 82 → 92**, **Multimodal 92 → 90**, **Coding 78 → 77**, Overall **83.6 → 85.6**.

## Model card

- **Name:** MiMo V2.6 Free (MiMo-V2.6-Flash free route)
- **Short description:** Zero-token-price routes to Xiaomi's natively multimodal MiMo-V2.6-Flash, a 309B/15B-active MIT-licensed sparse MoE with a 1M-token window. Intended for long-context coding agents and automation. This is the same weights as the paid `mimo-v2.6-flash` entry in this dataset — only the route, limits, and terms differ.
- **Provider / access — free routes (all $0.00 in / $0.00 out):**

  | Provider | Model ID | Context | Output | Reasoning | Tools | Structured |
  | --- | --- | --- | --- | --- | --- | --- |
  | **OpenCode Zen** | `mimo-v2.6-flash-free` | **200,000** | **32,000** | Yes | Yes | not marked |
  | **Xiaomi Token Plan (China)** | `mimo-v2.6-flash` | **1,048,576** | **131,072** | Yes | Yes | not marked |
  | **Xiaomi Token Plan (Europe)** | `mimo-v2.6-flash` | **1,048,576** | **131,072** | Yes | Yes | not marked |
  | **Xiaomi Token Plan (Singapore)** | `mimo-v2.6-flash` | **1,048,576** | **131,072** | Yes | Yes | not marked |
  | NaN | `mimo-v2.6-flash` | 1,048,576 | 131,072 | Yes | Yes | not marked |

- **Provider / access — paid routes (21 others):** Xiaomi first-party `mimo-v2.6-flash` at $0.14/$0.28; DeepInfra, NanoGPT, Novita, Requesty, LLM Gateway, Vercel AI Gateway, Tempr, ClinePass, and DevPass at $0.14/$0.28; OpenRouter at $0.14/$0.28 with a 1,050,000 context; Kilo Gateway at $0.10/$0.28; Vultr at $0.10/$0.25; CrossModel $0.16/$0.32; above.dev $0.17/$0.34; Venice AI $0.17/$0.35; AIHubMix $0.15/$0.31. **All 25 routes support reasoning and tool calling; all 25 accept a `temperature` parameter.** Structured output is only explicitly supported on 8 routes (DeepInfra, EmpirioLabs, Kilo, NanoGPT, Novita, OpenRouter, Requesty, Venice) — **none of the free routes list it.** Route limits also vary: most carry 1,048,576/131,072; EmpirioLabs, one LLM Gateway row, and Venice carry 1,000,000; one LLM Gateway (deepinfra) row caps output at 65,536; OpenRouter reports 1,050,000 context; and OpenCode Zen's free route is 200,000/32,000.
- **Release / knowledge:** MiMo-V2.6-Flash released / weights open-weighted **2026-09-21–22** (Models.dev records release 2026-09-22; the Hugging Face upload is 2026-09-21). **Knowledge cutoff is genuinely unpublished** — the "December 2024" string on the MiMo model page is a sample system prompt, not a cutoff claim.
- **IDs:** `mimo-v2.6-flash-free` (OpenCode Zen); `mimo-v2.6-flash` (Xiaomi, Token Plan, NaN); `xiaomi/mimo-v2.6-flash` (OpenRouter, NanoGPT, Kilo); underlying checkpoint `XiaomiMiMo/MiMo-V2.6-Flash-RL`.
- **Context window:** **Route-dependent.** Xiaomi Token Plan and NaN free routes: **1,048,576 input / 131,072 output** — identical to paid. OpenCode Zen free route: **200,000 input / 32,000 output**.
- **Modalities:** Text, image, video, and audio input; text output. **Conflict retained:** OpenCode's Data model listing explicitly reports four input modalities, while **Artificial Analysis lists only "text and image"** for this model — the audio/video claim remains vendor-side and unreconciled.
- **Pricing (verified 2026-10-10):** **$0.00 per 1M input and output on all four free routes.** These are subscription/token-plan routes and NaN, not necessarily unmetered public endpoints — **rate limits, fair-use policy, and queue priority must still be checked per route.**
- **Architecture:** Open-weight sparse MoE, **309B total / 15B active**, MIT licence (172.9 GB of MXFP4 weights across 65 shards; Xiaomi's card serves it at vLLM TP4 or SGLang TP8 — multi-GPU only). 48 layers (39 sliding-window, 9 full attention), hidden size 4096, 256 routed experts with 8 active. Hybrid attention plus an MTP speculative decoder. Self-hosting is an alternative to the free routes and costs only electricity.

### Raw benchmarks found

These are **checkpoint-level** facts — the free routes serve the same weights as the paid `mimo-v2.6-flash` entry, so the numbers apply. The distinction between routes is limits, price, and service terms, not capability.

Xiaomi model card / technical report (vendor harness):

- Terminal-Bench 2.1: **87.6%**
- Terminal-Bench 4.0: **28.8%**
- DeepSWE v1.1: **67.9%** on the card; **65.7%** in the launch post's training write-up — **two official Xiaomi numbers for the same RL run, still unresolved**
- OSWorld-Verified **80.8%**; AutomationBench **52.3%**; JobBench **61.2%**; Toolathlon-Verified **73.6%**; Agents' Last Exam **27.6%**
- MiMo Code Bench (in-house) **61.2%**; ProgramBench **26.0%**; MiMo Visual Coding **71.5%**
- CyberGym **95.1%**; MiMo Cyber Bench **77.2%**; ExploitGym **6.0%**; ExploitBench **25.3%**; SEC Bench Pro **47.5%**
- Chartography w/ tools **78.9%**; BabyVision w/ tools **89.6%**; ZeroBench-main w/ tools **49.0%**

Independent:

- **Vals AI Terminal-Bench 2.1: 76.40 ± 1.72** (2026-10-01) — **11.2 points below Xiaomi's 87.6**, and *above* Vals' run for the larger Pro
- **Vals AI Terminal-Bench 4.0: 24.24** (2026-10-08, mini-swe-agent) — below the vendor 28.8
- **AA-LCR v1.1: 74.3%** (#92 of 408, 78th percentile)
- **HLE: 35%** (Artificial Analysis, 2026-09-28) — the first published HLE figure for this model
- **AA Intelligence Index v4.3.2: 38**, class rank #8/116 among open-weight models of similar size (peer median 18)
- AA output speed **55.4 t/s** (vs. a 69.5 t/s open-weight median), TTFT 4.23s; **250M** index output tokens vs. a 140M median — AA classes it "notably fast, however very verbose"
- SciCode **51.3%** (85th percentile)
- Not published: GPQA Diamond, SWE-bench Verified/Pro, LiveCodeBench, Tau3-Banking, GDPval-AA, Claw-Eval, MCP-Atlas
- **Provider throughput on the same weights varies 17×** — LithosAI ULTRA CHAT 1,182.5 t/s at $0.16/task vs. DeepInfra 70.1 t/s at $0.44/task across 22 benchmarked providers

Sources consulted: [Models.dev — MiMo-V2.6-Flash provider table (25 providers)](https://models.dev/models/xiaomi/mimo-v2.6-flash), [Artificial Analysis MiMo-V2.6-Flash](https://artificialanalysis.ai/models/mimo-v2-6-flash) and [provider benchmarking](https://artificialanalysis.ai/models/mimo-v2-6-flash/providers), [The Model Gap MiMo-V2.6-Flash](https://themodelgap.com/models/mimo-v2-6-flash), [Vals AI Terminal-Bench boards](https://www.vals.ai/benchmarks/terminal-bench-4), [BenchmarkList MiMo-V2.6-Flash](https://benchmarklist.com/models/xiaomi-mimo-v2.6-flash/), [verdictpal MiMo-V2.6-Flash](https://verdictpal.com/models/mimo-v2-6-flash), [HokAI MiMo-V2.6-Flash](https://hokai.io/hub/models/mimo.v2.6-flash), and [XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 89/100.** Raised from 88. Terminal-Bench 2.1 **87.6%** (vendor) / **76.40** (Vals), OSWorld-Verified **80.8%**, Toolathlon-Verified **73.6%**, AutomationBench **52.3%**, JobBench **61.2%**, CyberGym **95.1%**, plus Chartography 78.9% and BabyVision 89.6% as tool-using visual agents. Held at 89 by **Terminal-Bench 4.0 at 24.24% independent** (vendor 28.8%), **ExploitGym 6.0%**, **ExploitBench 25.3%**, **SEC Bench Pro 47.5%**, and **Agents' Last Exam at 27.6%**. For a free route this is a very strong agentic profile.
- **Reasoning: 80/100.** Raised from 78. The prior pass recorded no AA composite for this route; **AA Intelligence Index of 38 at #8/116 (median 18)** and **HLE at 35%** now apply. The index is nearly 1.1× the open-weight peer median, which is remarkable for a free tier. Held at 80 because **no GPQA Diamond figure is published for this model at all**, and 250M index output tokens against a 140M median means the verbosity is real.
- **Context window: 92/100.** Raised from 82 — the largest change in this report. The prior pass scored the free tier at 200K/32K because that was the only free route then documented. **Xiaomi's own Token Plan free routes serve the model at the full 1,048,576 input / 131,072 output**, identical to paid, at $0.00/$0.00. Combined with **AA-LCR at 74.3% (78th percentile)** as genuine retrieval evidence, free 1M-context access is now available. The deduction is that the **OpenCode Zen route specifically remains 200K/32K**, so which free route you pick determines a 5× context difference.
- **Multimodal: 90/100.** Reduced from 92. Four input modalities with text output, and Xiaomi documents a real vision stack plus a visual-agent row (MiMo Visual Coding 71.5%). Reduced because **Artificial Analysis still lists only "text and image"** for this model, contradicting Xiaomi on audio and video, and because **structured output is not supported on any free route** — the cheapest routes are missing a capability that 8 paid routes do offer.
- **Coding: 77/100.** Reduced from 78. **DeepSWE 67.9%** (vendor) and **Terminal-Bench 2.1 87.6%** (vendor) are strong, but the independent check is sobering: **Vals AI reproduces Terminal-Bench 2.1 at 76.40, an 11.2-point drop**, and **Terminal-Bench 4.0 at 24.24**. **ProgramBench at 26.0%** is weak, and the unresolved 65.7-vs-67.9 DeepSWE conflict compounds it. **No SWE-bench, LiveCodeBench, or SciCode figure beyond SciCode's 51.3%** is available.
- **Cost efficiency: 100/100.** Unchanged, and now better founded. **Four independent routes serve this model at $0.00/$0.00**, up from one — OpenCode Zen, NaN, and Xiaomi Token Plan across China, Europe, and Singapore. With MIT weights available for self-hosting at electricity-only cost, and paid aggregators ranging $0.10–$0.17 in / $0.25–$0.35 out if you need guaranteed throughput, there is effectively no scenario where this model is expensive. The only real constraint is **rate limits and fair-use policy on the free routes**, which vary per provider and are not documented in the sources reviewed.
- **Overall Score: 85.6/100.** (89 + 80 + 92 + 90 + 77) / 5 = 428 / 5 = 85.6, up from 83.6. **Best fit:** free multimodal agent prototyping and long-context coding at zero token cost — and with **Xiaomi Token Plan now offering the full 1M window free**, the "free tier is short-context" assumption that shaped the previous revision no longer holds. **Three practical notes:** plan around Vals' numbers rather than Xiaomi's, since the 11-point Terminal-Bench gap is large; **no free route supports structured output**, so build against tool calling instead; and free-route throughput is not the same as first-party — the same weights span 70 t/s to 1,182 t/s across providers.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of the Models.dev 25-provider table for MiMo-V2.6-Flash (which enumerates every free and paid route with its limits and capability flags), Xiaomi's model card and technical report, Artificial Analysis (index, AA-LCR, HLE, and 22-provider benchmarking), Vals AI, and independent aggregators; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note: free-route limits are kept strictly separate from paid-route limits, and per-route capability differences (structured output, context, output cap) are recorded rather than averaged. The Xiaomi 65.7-vs-67.9 DeepSWE conflict remains unresolved. The audio/video modality conflict between Xiaomi and Artificial Analysis is carried forward unchanged.
- Future sources: add a new file next to this one, e.g. `MiMo_V2_6_Free_Recheck.md`, using the same headings.