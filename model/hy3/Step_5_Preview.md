# Tencent Hy3 — findings by Step 5 Preview

- Source: Tencent / Hy3 (`tencent/hy3`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Tencent Hy3
- **Short description:** Tencent Hy Team's July 2026 open-weight flagship — a 295B MoE (21B active + 3.8B MTP, 192 experts top-8, 256K context) under Apache 2.0 with GPQA Diamond 90.4% and SWE-bench Verified 78.0%, production-hardened tool calling and a vendor-measured 5.4% internal hallucination rate, at ~$0.08–$0.14/$0.33–$0.58 per 1M.
- **Provider / access:** Open weights (HF `tencent/Hy3` + `Hy3-FP8`, ModelScope, GitCode, CNB) under Apache 2.0 (no territorial restrictions, unlike the April preview); vLLM/SGLang serving recipes, AngelSlim quantization, full finetune + GRPO RL pipeline; hosted via Tencent fp8 and third parties; not on OpenCode Zen.
- **Release / knowledge:** Hy3 Preview late April 2026; full Hy3 released 2026-07-06 (GitHub repo, AI Model Timeline); knowledge cutoff not published.
- **IDs:** `tencent/hy3` (HF/hosted style), `hy3` (served model name).
- **Context window:** 256K (262,144 on some hosts — GitHub says 256K); ~64,000–128,000 max output (folder meta).
- **Modalities:** text in/out only (AI Model Timeline: "Text-only model"); reasoning effort `no_think`/`low`/`high`; tool calling (vLLM `hy_v3` / SGLang `hunyuan` parsers); MTP speculative decoding.
- **Pricing (as of 2026-10-21):** Tencent fp8 ~$0.0825/$0.33 off-peak, ~$0.14/$0.58 on other hosts (folder meta); llm-stats lists $0.14/$0.58 cached $0.035; free self-host under Apache 2.0 (~170GB VRAM at Q4, multi-GPU class).
- **Architecture:** 295B-total MoE, 21B active per token, 3.8B MTP layer, 80 layers, GQA (64 heads, 8 KV), 192 experts top-8 activated, hidden 4096, BF16; dense-MoE hybrid with an always-active shared expert.

### Raw benchmarks found

Tencent Hy3 model card (via AI Model Timeline + official GitHub) + Artificial Analysis figures via BenchLM:

Agent / tool use:

- Tool-call reliability: vendor-fixed to "production-grade standards" — SWE-bench Verified accuracy variance **within 4%** across CodeBuddy / Cline / KiloCode scaffoldings (official GitHub)
- AA Agentic Index: **25.6%** (Artificial Analysis via BenchLM)
- GDPval-AA: **1,136 Elo / 28.3%** normalized (Artificial Analysis via BenchLM)
- Terminal-Bench 2.x: **not reported by the vendor** (AI Model Timeline) — no verified public score found
- Tau2 / Tau3 / Claw-Eval / OSWorld / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (vendor model card via AI Model Timeline); **89.7%** (Artificial Analysis via BenchLM)
- AA-HLE: **33.5%** (Artificial Analysis via BenchLM) — mid band
- Artificial Analysis Intelligence Index: **25.3%** (Artificial Analysis via BenchLM — mid band)
- AA-LCR (long-context reasoning): **79.0%** (Artificial Analysis via BenchLM)
- CritPt: **4.9%** (Artificial Analysis via BenchLM) — weak
- AA-Omniscience: Accuracy **32.0%**, Hallucination Rate **74.1%** (Artificial Analysis via BenchLM) — vendor reports internal real-world hallucination dropped 12.5% → **5.4%** and commonsense errors 25.4% → 12.7% (official GitHub)
- MMLU-Pro: not in the vendor card (AI Model Timeline) — no verified public score found
- Blind expert evaluation: **2.67/4** vs GLM-5.1's 2.51/4 across 270 experts (official GitHub)

Coding:

- SWE-bench Verified: **78.0%** (vendor model card via AI Model Timeline; scaffolding variance <4%)
- SWE-bench Pro: **57.9%** (vendor model card via AI Model Timeline)
- AA-SciCode: **48.6%** (Artificial Analysis via BenchLM)
- AA Coding Index: **58.8%** (Artificial Analysis via BenchLM)
- LiveCodeBench / DeepSWE / Vibe Code Bench / Terminal-Bench: no verified public score found

Long context:

- AA-LCR **79.0%** (Artificial Analysis via BenchLM); vendor reports MRCR and multi-turn intent-tracking improvements (coreference/ellipsis/multi-turn constraint inheritance; issue rate 17.4% → 7.9% internally); 256K window; no RULER/GraphWalks retrieval-at-length figure published.

Human preference / design (traceability): Design Arena Website 1183 Elo (OpenRouter via BenchLM).

### Normalized scores (1–100)

- **Tool use: 78/100.** The vendor's reliability work is the differentiator — production-grade tool-call error recovery, <4% accuracy variance across CodeBuddy/Cline/KiloCode scaffoldings and generalization across agent scaffolds; capped by AA Agentic Index 25.6%, GDPval 1,136 Elo (28.3%) and zero published Terminal-Bench/Tau/OSWorld/MCP numbers.
- **Reasoning: 84/100.** GPQA Diamond 89.7–90.4% is frontier-leaning graduate science and AA-LCR 79.0% shows good long-context reasoning; capped by HLE 33.5%, AA Intelligence Index 25.3% (mid band), CritPt 4.9% and the 74.1% AA-Omniscience hallucination rate (vs the vendor's 5.4% internal figure — different measurement bases, both listed).
- **Context window: 78/100.** 256K native with 64–128K max output lands in the 200K–500K tier (65–84, above the 200K=70 floor); AA-LCR 79.0% is solid but no ≥512K retrieval evidence exists.
- **Multimodal: 15/100.** Text-only model — text in, text out (AI Model Timeline, official GitHub); the text-only tier (10–20) applies with no vision/audio encoder.
- **Coding: 78/100.** SWE-bench Verified 78.0% (vendor, scaffold-stable) and AA Coding Index 58.8% are solid upper-mid band; capped by SWE-bench Pro 57.9%, SciCode 48.6% and no LiveCodeBench/DeepSWE/Terminal-Bench numbers — the expert blind eval (2.67/4, beating GLM-5.1's 2.51) supports real-world frontend/CI-CD strength.
- **Cost efficiency: 92/100.** ~$0.08–$0.14 in / $0.33–$0.58 out (cache $0.035) sits near the ~$0.60/$2.20 ≈ 92 reference band on the cheaper side; Apache 2.0 weights (free self-host, ~170GB Q4) hold the floor at $0.
- **Overall Score: 67/100.** Mean of (78 + 84 + 78 + 15 + 78) / 5 = 66.6 → 67. Best fit: the cost-efficient open-weight reasoning/agent MoE for text coding and office automation — flagship-adjacent GPQA and rock-solid tool calling at 21B-active serving cost; text-only, so any vision workload routes elsewhere.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (Tencent official GitHub model card + product-reliability section, Artificial Analysis figures via BenchLM, AI Model Timeline vendor benchmark record); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
