# Hy4 Preview (Tencent Hunyuan 4) — findings by Qwen 3.8 27B

- Source: Tencent Hy Team/Hy4 Preview (`hy4-preview`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 Preview (informally "Hunyuan 4" / "Tencent Hunyuan 4"; NOT the older dense Hunyuan-4B)
- **Short description:** Tencent's preview-stage open-weight flagship (770B MoE, HYV4 architecture) released 2026-08-28, built for long-running engineering, document/financial analysis, research and tool-using agents; Apache 2.0, co-designed with CodeBuddy/WorkBuddy. "Preview" = weights/API live, but behavior and serving may still change; Tencent discloses it can over-reason and over-verify.
- **Provider / access:** Tencent Cloud TokenHub (`hy4-preview`; OpenAI Chat Completions + Responses and Anthropic Messages compatible), Tencent products (WorkBuddy, CodeBuddy, Yuanbao, ima); open weights for self-hosting (vLLM/SGLang, FP8 recipe = 8-way tensor parallelism). Two-week launch-period trial via WorkBuddy/CodeBuddy (temporary promo, not a standing free tier). No OpenCode Zen Free ID found; GPTProto listing it as "coming soon".
- **Release / knowledge:** released and open-sourced 2026-08-28 (Tencent, via gptproto review 2026-08-28); final Hy4 release date not announced; knowledge cutoff not disclosed.
- **IDs:** `hy4-preview` (Tencent TokenHub API model ID). No Free ID on Zen found.
- **Context window:** ~1,000,000 total; max API input 960K, max API output 64K (Tencent TokenHub docs)
- **Modalities:** Text in, text out only (no image/video — family-level multimodal systems are NOT part of this endpoint). Reasoning: yes — deep reasoning on by default, disable with `no_think`. Function calling + automatic tool selection, JSON Schema-constrained output, streaming, prompt caching.
- **Pricing (as of 2026-08-28, paid):** $0.834 in / $2.501 out / $0.042 cached in per 1M (Tencent official international; cached ≈ 5% of standard input).
- **Architecture:** MoE 770B total / 49B active per token; 78-layer backbone (layer 1 dense FFN, 77 MoE blocks × 256 routed + 1 shared expert, top-8); Gated DSA sparse attention with IndexCache; iHC (identity Hyper-Connections, 4 residual streams); native MTP speculative-decoding head (10B total / 0.7B active). Open weights Apache 2.0 (original + FP8; community GGUFs: 229GB STQ1, 467GB Q4).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (vendor-reported, Tencent launch appendix)
- Toolathlon-Verified: **74.1%** (vendor-reported — well above the 34–45% range of other open models on BenchmarkList)
- APEX-Agents: **37.1%** (vendor-reported)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Tencent internal blind test (163 experts, 203 engineering tasks, 4-point scale): **2.99/4** vs Kimi K3 2.94, GLM-5.3 2.92; vs GLM-5.3: 46.8% wins / 12.8% ties / 40.4% losses; vs K3: 51.2% / 7.9% / 40.9% (vendor-run, narrow lead in Tencent's own environment)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (vendor-reported)
- HLE: HLE with tools **55.4%** (vendor-reported); HLE without tools: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (no AA/BenchLM page located this pass)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Multilingual: **82.9%** (vendor-reported)
- SWE-Bench Pro Public: **65.7%** (vendor-reported)
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found
- DeepSWE: **64.3%** (vendor-reported)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Arena WebDev AutoEval (early, reward-model-voted): **1633** points vs GLM-5.3 Flash 1634 (effectively a tie; too few live votes for a stable rank — gptproto, 2026-08-28)

Long context:

- 1M window / 960K in / 64K out per TokenHub docs; no independent MRCR/RULER retrieval measurement found (architecture — Gated DSA + IndexCache — is explicitly designed for long-context efficiency; vendor-reported 31.8% inference throughput gain is an engineering result, not a retrieval score)

Negative-findings notes:

- Nearly all launch-day figures are Tencent-vendor-reported (launch benchmark appendix); no independent AA/BenchLM/Vals run located as of 2026-10-01. Treat all scores below as vendor-claimed until independent harnesses land.
- Disclosed vendor limitations: over-long reasoning on complex tasks; repeated verification of already-complete work (more latency/output tokens).
- LocalLLaMA community consensus places it around the GLM-5.3 tier; questioning of the vendor charts noted.

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 85.4% (vendor) sits just under the 88%+ frontier line and Toolathlon-Verified 74.1% (vendor) far exceeds the 34–45% of comparable open models; discounted from the top band because no independent TB/Tau3/GDPval run exists and APEX-Agents is only 37.1%.
- **Reasoning: 78/100.** GPQA Diamond 92.3% and HLE-with-tools 55.4% (both vendor) clear the 90%+/40%+ frontier references, and the internal blind test ties Kimi K3; capped by the total absence of independent GPQA/HLE/AA-Index verification and the disclosed over-reasoning behavior.
- **Context window: 95/100.** Documented ~1M total (960K in / 64K out) lands in the >=1M tier (95–100); no 512K+ independent retrieval measurement found, so it does not reach 100.
- **Multimodal: 15/100.** Text in/out only — no image, video, audio, or document-visual input on this endpoint (10–20 text-only band).
- **Coding: 80/100.** SWE-bench Multilingual 82.9% and SWE-Pro 65.7% (both vendor) are strong against open peers (cf. Nemotron 3 Ultra 67.7% / 46.4%), and early Arena WebDev ties GLM-5.3 Flash; DeepSWE 64.3% is below the 74%+ frontier line and everything is vendor-run, so it stays under the 90 band.
- **Cost efficiency: 90/100.** Paid $0.834/$2.501 with ~5% cache pricing sits just above the ~92 reference of $0.60/$2.20; Apache 2.0 open weights (FP8 + community GGUFs) keep it near the paid top-128B open tier. No standing free tier.
- **Overall Score: 69.2/100.** Mean of (78 + 78 + 95 + 15 + 80)/5 = 69.2. Best fit: open-weight, text-only long-horizon engineering/research agents with 1M context where vendor-claim risk is acceptable — run it against your own regression suite before trusting the launch charts; choose GLM-5.3 Flash or MiniMax M3 when visual input, price, or independence of evidence matters more.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (Tencent launch benchmark appendix via gptproto.com review 2026-08-28, apxml spec page, hy4ai.com, LocalLLaMA/community coverage, Arena WebDev AutoEval early scores); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Hy4_Final.md`, using the same headings.
