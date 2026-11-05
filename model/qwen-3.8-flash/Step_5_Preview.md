# Qwen 3.8 Flash — findings by Step 5 Preview

- Source: Alibaba / Qwen Team (`Qwen/Qwen3.8-Flash-Next`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash (the open-weight implementation is **Qwen3.8-Flash-Next**). Distinct from the dense **Qwen 3.8 27B** (`model/qwen-3.8/`) and the **2.4T Max** flagship (`model/qwen-3.8-max/`), and distinct again from the production-hardened **hosted** Qwen3.8-Flash on Qwen Cloud — which Alibaba explicitly does *not* give a separate benchmark table, so the figures below are Flash-Next's and the repo's `qwen-3.8-flash` folder is scored on them with that mapping stated.
- **Short description:** The most architecturally interesting model in this research series: a **125B MoE with only 6B activated per token plus a novel 51B-parameter n-gram embedding table**, released as an **experimental preview of the architecture that will underpin Qwen4**. Its headline claim is remarkable and independently stated by the model card — **it beats the 27B-dense Qwen3.8-27B on every directly-compared metric** (GPQA 91.7 vs 89.2, LiveCodeBench 91.9 vs 90.3, DeepSWE 58.7 vs 42.2, ALE Score 51.2 vs 42.9) **while activating 4.5x fewer parameters per token**. That is the strongest efficiency evidence measured here.
- **Provider / access:** Weights on Hugging Face (`Qwen/Qwen3.8-Flash-Next`, **Qwen Community License 1.0 — custom, not Apache**), plus a production-hardened hosted version on Qwen Cloud with 1M context by default. Also on OpenRouter and Vercel. Free via the Qoder app for individuals.
- **Release / knowledge:** released **August 2026** as an experimental architecture preview. Knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.8-Flash-Next` (Hugging Face); `qwen3.8-flash-next` (Openrouter, benchmarklist).
- **Context window:** **262,144 tokens natively, extensible to 1,000,000 via YaRN RoPE scaling** — with Alibaba's own warning that static YaRN "can slightly reduce short-context performance" and should be enabled only when genuinely needed.
- **Modalities:** **text, image and video in; text out** (model card). Thinking mode on by default (`enable_thinking`), with `reasoning_effort` (xhigh default / medium / low) and `preserve_thinking`.
- **Pricing (as of 2026-11-05):** hosted API ~**$0.15/$0.47 per 1M** (per the repo's meta.json and codersera), with a 131K output cap; **$0 self-hosted** under the Qwen Community License 1.0 — note that licence is *custom*, so commercial-use terms need verification before deployment.
- **Architecture:** **125B MoE (512 experts, 10 routed + 1 shared) with only 6B activated per token**, plus **51B n-gram embedding parameters** (20M bigrams/trigrams indexed at layer 2 rather than computed — a cheap scaling axis that adds no inference compute), hybrid attention across 48 layers (Gated DeltaNet linear + Qwen Sparse Attention at micro-block level), 4-branch Gated Residual, and a Muon+AdamW training recipe. ~180B safetensors total with 4B MTP.

### Raw benchmarks found

**All figures are self-reported by Alibaba's Qwen Team on the official model card** (cross-checked by Benchgen against the raw HTML tables rather than stripped metadata). No Artificial Analysis, Vals, ARC or Epoch measurement exists for this ID.

Coding:

- **DeepSWE 1.1: 58.7%** — under the 74% frontier reference, but 16.5 points *above* the 27B-dense sibling
- SWE-bench Pro: **62.5%**; SWE-bench Multilingual: 81.0%; NL2Repo-Bench: 48.1%
- **LiveCodeBench v6: 91.9%** — the highest LiveCodeBench figure measured in this batch, above both the 27B dense (90.3%) and Qwen3.8 Max (no figure)

Agent:

- **Toolathlon-Verified: 73.5%**; **JobBench: 55.7%**
- **Agents' Last Exam: Pass@1 24.3 / Score 51.2** — the Score figure beats Qwen3.8-27B's 42.9 and level-pegs Qwen3.8 Max's 52.4
- **OSWorld 2.0: 19.4% binary / 52.3% partial** — a huge sub-metric gap, and Benchgen explicitly declines to publish it because the leaderboard's scale is undocumented
- CoWorkBench (in-house): 73.9%; RecreationBench (in-house): 49.9%; AndroidWorld: 84.5%
- **ClawEval-MM: Pass@3 64.4% / average 60.4%** — one of only three measured ClawEval figures in this research series, and the best of them
- **GPQA-tier references — MCP-Atlas, τ³-Banking, GDPval-AA, Terminal-Bench: no verified public score found**

Reasoning / knowledge:

- **GPQA Diamond: 91.7%** — clears the 90%+ frontier reference, and above the 27B sibling's 89.2%
- **Humanity's Last Exam: 35.9%** — under the 40%+ frontier reference
- **IFBench: 81.3%** — a strong instruction-following figure
- **CritPt, AA-LCR, ARC-AGI, FrontierMath, MRCR, AA Intelligence Index, AA-Omniscience: no verified public score found** — so four of five reasoning references and every reliability metric are entirely absent

Multimodal — **unusually strong for a 6B-active model**:

- **RealWorldQA: 88.5%**; **MathVision (no CI): 90.6%**; **CharXiv Reasoning (with CI): 90.6%** / 84.6% no-tools
- ERQA: 72.3%; **LVBench (long video): 76.6%**; AndroidWorld: 84.5%; Vision2Web (non-standard variant): 64.0%
- **MMMU-Pro: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 62/100.** Mid-band, and the model's clearest gap. **ClawEval-MM Pass@3 64.4% is the best measured ClawEval figure in this research series**, Toolathlon-Verified 73.5% and JobBench 55.7% are respectable, and ALE Score 51.2 beats the 27B sibling. Capped hard because **two of three frontier references are entirely unmeasured** — no MCP-Atlas, no τ³-Banking, no GDPval-AA, no Terminal-Bench figure at all — and by OSWorld 2.0 at **19.4% binary** (52.3% partial), a sub-metric gap so large that Benchgen declined to publish it.
- **Reasoning: 76/100.** Mid-band, and the best evidence-to-parameter ratio in this research series. **GPQA Diamond 91.7% clears the 90% reference and IFBench 81.3% is strong**, both achieved with only 6B parameters activated per token — fewer than the 27B dense model it beats on every compared row. Capped by HLE 35.9% (under the 40% reference) and the **total absence of CritPt, AA-LCR, ARC-AGI, FrontierMath, MRCR and any composite index or hallucination figure** — so reliability is completely unmeasured.
- **Context window: 92/100.** Scored in the methodology's 500K–1M band and above it, because **262,144 tokens is genuinely native** — the model's stated capacity, not a claimed extension — and 1M is available via YaRN. Held below the 1M tier (95+) because the 1M figure requires an explicit RoPE-scaling change that Alibaba warns can hurt short-context performance, no MRCR or GraphWalks measurement exists at any length, and the hosted route caps output at 131K.
- **Multimodal: 88/100.** Text + image + video in with text out places it in the methodology's 75–90 "+video/PDF in" band, and the depth is genuinely strong for a 6B-active model: **MathVision 90.6%, CharXiv 90.6% with CI, RealWorldQA 88.5%, LVBench 76.6%, AndroidWorld 84.5%**. Held at 88 rather than the 90s because there is no audio input, no MMMU-Pro figure, output is text-only, and the entire visual suite is vendor-run with no replication.
- **Coding: 78/100.** The strongest dimension. **DeepSWE 58.7%** is 16.5 points above the 27B-dense sibling and SWE-bench Pro 62.5% / SWE Multilingual 81.0% / NL2Repo-Bench 48.1% are a coherent repair-coding record. Capped because **no row clears a frontier reference** — DeepSWE is 15.3 points under 74%, no AA-SciCode, no AA Coding Index, no SWE-bench Verified, no LiveCodeBench from AA — and by the 19.4% OSWorld binary. Note again the headline: this is achieved with 6B activated parameters.
- **Cost efficiency: 92/100.** Hosted at **$0.15/$0.47 per 1M** — the cheapest card in this batch alongside MiMo-V2.6-Flash — and **$0 self-hosted**, though under a **custom Qwen Community License 1.0 rather than Apache 2.0**, which is a real commercial-use caveat compared with the 27B sibling. Held at 92 rather than 97+ because the licence is not permissive, there is no published cost-per-task measurement, and it is slightly above the ~$0.10/$0.20 anchor.
- **Overall Score: 79.2/100.** (62 + 76 + 92 + 88 + 78) / 5 = 79.2 → **79**. Recommendation: the most **architecturally efficient model in this research series** — it beats the 27B-dense Qwen3.8-27B on every directly-compared metric while activating 4.5x fewer parameters per token, takes the best measured ClawEval figure (64.4%), and self-hosts free at $0.15/$0.47 hosted. Pick it for high-volume coding and multimodal agent sweeps where its parameter efficiency compounds. Two cautions: **it is explicitly labelled an experimental architecture preview, not a production flagship**, so treat the hosted Qwen3.8-Flash as the hardened sibling; and **every number here is vendor-run from Alibaba's own card with no AA/Vals/ARC replication**, plus reliability is entirely unmeasured.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Alibaba's official Qwen3.8-Flash-Next model card as the primary source (self-reported by the Qwen Team and cross-checked by Benchgen against the raw HTML benchmark tables rather than stripped metadata), cross-checked against Benchgen's model-card entry, benchmarklist's entry for the architecture and parameter detail, llm-stats and codersera for pricing and context, and the repo's own `meta.json` for the free-Qoder-app tier, output cap and hosting notes. The flash-next-vs-hosted-flash mapping is recorded explicitly because Alibaba publishes no separate benchmark table for the hosted variant. The experimental-preview designation and the custom (non-Apache) licence are both surfaced rather than smoothed over, and the OSWorld binary/partial sub-metric gap is reported with Benchgen's stated reason for declining to publish it. Missing benchmarks (MCP-Atlas, τ³-Banking, GDPval-AA, Terminal-Bench, CritPt, AA-LCR, ARC-AGI, FrontierMath, MRCR, composite index, AA-Omniscience, MMMU-Pro, SWE-bench Verified, AA-SciCode, AA Coding Index) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Alibaba — Qwen3.8-Flash-Next model card (primary source; full benchmark tables vs Qwen3.8-27B/Max)](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
  - [Benchgen — Qwen3.8-Flash-Next model card and benchmark transcription](https://benchgen.com/models/alibaba/qwen3-8-flash-next)
  - [BenchmarkList — Qwen3.8-Flash-Next (architecture, 125B/6B + 51B n-gram detail)](https://benchmarklist.com/models/qwen-qwen3.8-flash-next/)
  - [llm-stats — Qwen3.8-Flash-Next benchmarks, pricing & context window](https://llm-stats.com/models/qwen3.8-flash-next)
  - [codersera — Qwen 3.8 Flash specs, price & benchmarks](https://codersera.com/blog/qwen-3-8-flash-complete-guide-2026/)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
