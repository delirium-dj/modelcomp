# MiMo V2.6 Flash — findings by Space Bunny

- Source: Xiaomi (`mimo-v2.6-flash`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change in both directions.** Vals AI has now independently run Terminal-Bench 2.1 (**76.40 ± 1.72**) and Terminal-Bench 4.0 (**24.24**), both well under Xiaomi's own figures — the first real independent check on the model's headline agentic numbers. Artificial Analysis has itemised **AA-LCR v1.1 at 74.3%** and **HLE at 35%**, resolving the long-context gap and the previously unpublished HLE row. Net effect: **Tool use 72 → 76**, **Reasoning 72 → 74**, **Context window 90 → 91**, **Coding 75 → 72**, moving Overall **77.4 → 78.2**.

## Model card

- **Name:** MiMo-V2.6-Flash (open weights, MIT)
- **Short description:** Xiaomi's cost-optimised half of the September 2026 MiMo-V2.6 release — a 309B-total / 15B-active sparse MoE that keeps the flagship Pro's 1M context and claimed full text/image/video/audio input at roughly one third of the token price. Xiaomi positions it as the balance point for high-frequency calls and large-scale professional workflows, and it is the variant a team can realistically self-host. Artificial Analysis scores it **38 on Intelligence Index v4.3.2**, class rank **#8/116** among open-weight models of similar size (peer median 18).
- **Provider / access:** Xiaomi MiMo API platform and Xiaomi AI Studio (`mimo-v2.6-flash`); MiMo Code, MiMo Desktop; OpenRouter, Vercel AI Gateway, DeepInfra and other aggregators at the same list price. API is compatible with both OpenAI and Anthropic request protocols. Artificial Analysis benchmarks exactly **1 provider (Xiaomi's own API)**. Weights: `XiaomiMiMo/MiMo-V2.6-Flash-RL` on Hugging Face and ModelScope (MIT, ungated, 2026-09-21) — **173 GB / 65 MXFP4 shards**, served by Xiaomi's card with vLLM at `--tensor-parallel-size 4` or SGLang at `--tp 8`. GGUF, MLX, and NVFP4 community conversions appeared within a day.
- **Release / knowledge:** Announced 2026-09-21 UTC (2026-09-22 Beijing time). Trained in the same livestreamed 30-step RL run as Pro (started 2026-09-15, metrics on a public dashboard) at a cost Xiaomi puts at ~$0.85M — a departure from the closed system-card practice of most Western labs. **Knowledge cutoff is genuinely unpublished**: the "December 2024" string on the MiMo model page is a sample system prompt, not a cutoff claim.
- **IDs:** `mimo-v2.6-flash` (Xiaomi platform); `xiaomi/mimo-v2.6-flash` (OpenRouter). No Free ID exists on OpenCode Zen for this slug — the Zen free tier lives in the separate `mimo-v2.6-free` entry.
- **Context window:** **1,048,576 tokens (1M)** with **131,072-token** maximum output, listed identically on the Xiaomi model page, Vercel's AI Gateway, llm-stats.com, DeepInfra, RouterPlex, and Artificial Analysis.
- **Modalities:** **Vendor claim** — text, image, video, and audio in; text out, with tool calling, streaming, web search, structured output, deep-thinking reasoning mode, and prompt caching per the Xiaomi model page. Backed by a documented **681M-parameter vision transformer, 308M audio tokenizer, and 127M audio patch encoder**. **Unresolved conflict:** Artificial Analysis lists input modality as "Supports: text and image" only. The Model Gap records that the AI provider's own page is internally inconsistent with the Hugging Face weights on the multimodal point.
- **Pricing (verified 2026-10-10, unchanged):** **$0.14** per 1M uncached input, **$0.28** per 1M output, **$0.0028** per 1M cached input (¥1 / ¥2 / ¥0.02 CNY). One flat rate — no length threshold, time-of-day discount, or promotion; Xiaomi states V2.6 pricing matches the V2.5 series. First-party rate limits 100 RPM / 10M TPM. Artificial Analysis measures a **98% cache discount, $0.06 blended per 1M, and $0.06 per Intelligence Index task** (rank #6/116 in class) — the independent cost measurement confirms the sticker price. Sibling tiers: MiMo-V2.6-Pro $0.435/$0.87, MiMo-V2.6-Pro UltraSpeed $4.35/$8.70.
- **Architecture:** sparse Mixture-of-Experts, **309B total / 15B active** (Hugging Face repo lists 173 GB MXFP4; some Xiaomi materials carry conflicting parameter figures — flagged). **48 layers** (39 sliding-window, 9 full attention), hidden size 4096, **256 routed experts with 8 active and no shared experts**. Hybrid attention plus a multi-token-prediction speculative decoder — Xiaomi claims 2.5–3.7× faster inference than standard autoregressive decoding, though the card states 5 drafter layers while the config specifies 3 (documented inconsistency).
- **Family context:** MiMo-V2.6-Pro is 1.02T/42B (70 layers, 384/8 experts, 566 GB); a 9B dense Qwen3.5-based Distill runs 262,144 context at 18.8 GB BF16 on a laptop. Neither number is attributed to Flash.
- **Lifecycle:** No deprecation, successor, or discontinuation notice found as of 2026-10-10. `predecessorId` is null on trackers — no Xiaomi source says it replaces MiMo-V2.5 or V2-Flash.

### Raw benchmarks found

**Independently measured (new this pass):**

- **Terminal-Bench 2.1 (Vals AI, Terminus 2, pass@1): 76.40 ± 1.72** (2026-10-01) — **11.2 points below Xiaomi's 87.6**, and *above* Vals' run for the larger Pro (67.79), reversing Xiaomi's own ordering
- **Terminal-Bench 4.0 (Vals AI, mini-swe-agent, single bash tool, pass@1 averaged over 3 full passes): 24.24** (2026-10-08, raw 0.24242) — below Xiaomi's 28.8. No official or Artificial Analysis TB4.0 row exists.
- **AA-LCR v1.1: 74.3%** (Artificial Analysis, 2026-10-03; AA-LCR Verified 74.33%) — rank **#92/408**, 78th percentile. Field leader Kimi K3 at 88.7.
- **HLE: 35%** (Artificial Analysis, 2026-09-28) — rank #61/186. **The first actual HLE figure ever published for this model**, vendor or otherwise.
- SciCode: **51.3%** — rank 46/296, 85th percentile
- Artificial Analysis Intelligence Index v4.3.2: **38/100, class rank #8/116** (peer median 18) — unchanged from 2026-09-29
- AA speed: **55.4 output tokens/s** (#44/116, "notably slow" vs. an 81.8 t/s peer median), TTFT **4.23s**, verbosity **240M** index output tokens vs. a 140M median

**Xiaomi model-card / launch-post figures (vendor-harness):**

- DeepSWE v1.1: **67.9%** (card) vs. **65.7%** (launch post, same RL run's held-out endpoint, up from 48.8 pre-training over 30 steps and ~750K trajectories). **Conflict still unresolved** — two official Xiaomi numbers, no independent runner; card figure retained and flagged. Rank 18/52 (67th pct); field leader O-5.5 at 74.2.
- Terminal Bench 2.1: **87.6%** — rank 15/194 (93rd pct); field leader Fable 5.1 at 91.4
- Terminal Bench 4.0: **28.8%** — rank 17/29 (43rd pct); field leader O-5.5 at 66.4
- AutomationBench v1.0.6: **52.3%** (Pro 53.1, Claude Opus 5 50.3, GPT-5.6 Sol 45.8, Fable 5.1 46.2)
- Toolathlon-Verified: **73.6%** (Pro 76.9, Opus 5 80.6, Fable 5.1 77.9, Kimi K3 76.5)
- OSWorld-Verified: **80.8%** (Pro 82.0, Opus 5 83.4, Kimi K3 84.8)
- JobBench: **61.2%**; Agents' Last Exam: **27.6%**; ProgramBench: **26.0%** (rank 31/37, 17th pct — the weakest percentile of any row here); MiMo Code Bench (in-house): **61.2%**; MiMo Visual Coding: **71.5%**
- CyberGym: **95.1%**; MiMo Cyber Bench: **77.2%**; ExploitGym **6.0%**; ExploitBench **25.3%**; SEC Bench Pro **47.5%** (all far behind Opus 5 / GPT-5.6 Sol on the security rows)
- GDPval-AA 2.1: **blank in Xiaomi's own table.** Tau3-Banking / Tau2-Bench / Claw-Eval / MCP-Atlas / GPQA Diamond / SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Vibe Code Bench: **no verified public score found.**
- Board status: as of 2026-10-10 neither tbench.ai, deepswe.datacurve.ai, toolathlon.xyz, nor snorkel.ai publishes its own verdict for Flash. **Vals AI is now the only independent runner with rows.**

**Low-confidence aggregator data, explicitly rejected:** RankLLMs lists SWE-bench Verified 67.2%, GPQA Diamond 54.8%, Terminal-Bench 2.1 64.5%, and 185 tps with sub-220ms TTFT for this model. Every one of those contradicts both Xiaomi and Artificial Analysis; the 185 t/s figure also contradicts AA's measured 55.4 t/s. None is used.

### Normalized scores (1–100)

- **Tool use: 76/100.** *(was 72)* Raised on new independent evidence, not on better vendor numbers. Vals AI's Terminal-Bench 2.1 at **76.40** and Terminal-Bench 4.0 at **24.24** are the first real checks on this model's agentic profile, and both sit meaningfully below the vendor table — but Vals' own runs put Flash **above** the larger Pro on Terminal-Bench 2.1 (76.40 vs 67.79), which is a genuine positive. Toolathlon-Verified 73.6%, OSWorld-Verified 80.8%, AutomationBench 52.3%, and JobBench 61.2% keep it in the credible-agent band. Capped by Terminal-Bench 4.0 at 24.24 independent / 28.8 vendor (field leader O-5.5 at 66.4), ExploitGym 6.0%, ExploitBench 25.3%, SEC Bench Pro 47.5%, and a still-blank GDPval-AA cell.
- **Reasoning: 74/100.** *(was 72)* Raised modestly. **HLE at 35%** (Artificial Analysis) is the first published HLE figure for this model and it is mid-pack — above MiMo's own Agents' Last Exam of 27.6% but well below the frontier. The AA Index of 38 against an 18 class median remains the strongest single piece of evidence. Held near the mid-70s because GPQA Diamond, CritPt, Omniscience, and hallucination-rate rows are still unpublished, and 240M index output tokens against a 140M median shows real verbosity drag.
- **Context window: 91/100.** *(was 90)* **AA-LCR v1.1 at 74.3%** is now itemised, which resolves the standing caveat that the 1M window had no standalone retrieval measurement. It lands at the **78th percentile (#92/408)** — genuinely good for a model at this price, but 14.4 points behind Kimi K3's 88.7. 1,048,576 in / 131,072 out is corroborated across Xiaomi, Vercel, llm-stats, DeepInfra, RouterPlex, and Artificial Analysis.
- **Multimodal: 78/100.** *(unchanged)* Vendor-claimed text, image, video, and audio input at parity with Pro, backed by a real 681M vision transformer and 308M audio tokenizer, plus MiMo Visual Coding at 71.5%. Deliberately not raised: **Artificial Analysis still lists only text and image input**, contradicting Xiaomi on video and audio; output is text-only; and MiMo Visual Coding is in-house.
- **Coding: 72/100.** *(was 75)* Reduced on the independent check. The headline Terminal Bench 2.1 figure of **87.6% does not survive third-party reproduction — Vals AI measures 76.40, an 11.2-point gap** that is larger than the ±10.6 noise band on that benchmark. Terminal-Bench 4.0 similarly drops from a vendor 28.8 to an independent 24.24. DeepSWE v1.1 at 67.9% keeps the model credibly competitive (rank 18/52), and ProgramBench at 26.0% is a 17th-percentile result where every model including GPT-5.6 Sol scores under 27. The still-unresolved 65.7-vs-67.9 conflict on its own headline code number compounds the problem.
- **Cost efficiency: 95/100.** *(unchanged)* **$0.14 / $0.28 with cached input at $0.0028** is among the cheapest rate cards anywhere for a model claiming four input modalities, at 15B active parameters under an MIT licence with no licence fee — cheaper per token than GLM-5.3-Flash's $0.15/$0.50. Artificial Analysis supplies the independent confirmation: 98% cache discount, $0.06 blended per 1M, **$0.06 per Intelligence Index task** (#6/116 in class). Small deductions: paid-only hosted access, 173 GB of weights requiring a multi-GPU node (vLLM TP4 / SGLang TP8) for self-hosting, 100 RPM first-party rate limits, and low throughput (55.4 t/s, 4.23s TTFT) on the single provider AA measures.
- **Overall Score: 78.2/100.** *(was 77.4)* (76 + 74 + 91 + 78 + 72) / 5 = 391 / 5 = 78.2. Best fit: high-volume, cost-sensitive agent loops — code review, document triage, multi-agent collaboration over a 1M window with mixed modalities. **The caveat has changed shape:** it is no longer "never independently measured" but "independently measured on one provider, and the independent runs are consistently below the vendor table." Plan around Vals' numbers, not Xiaomi's.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: public internet research (Vals AI Terminal-Bench 2.1 and 4.0 boards, Artificial Analysis Index v4.3.2 and AA-LCR/HLE rows, Xiaomi MiMo-V2.6 announcement and model card, official `mimo.mi.com` model page, HuggingFace repo notes, BenchmarkList, The Model Gap, verdictpal, waitwhichmodel, HokAI, ComputingForGeeks); scores are normalized 1–100 interpretations, not official vendor scores. Every vendor-harness figure is labelled as such, and the two Vals AI and four Artificial Analysis rows are called out separately. Cost efficiency is excluded from Overall.
- Source-quality note: RankLLMs' SWE-bench Verified 67.2 / GPQA 54.8 / Terminal-Bench 2.1 64.5 / 185 tps figures for this model were found, found to contradict both the vendor and Artificial Analysis, and were rejected rather than averaged in.
- Future sources: add a new file next to this one, e.g. `Space_Bunny_v3.md`, using the same headings.