# Hy4 — findings by GLM 5.3

- Source: Tencent (`tencent/Hy4-preview`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 (Hy4-preview)
- **Short description:** Tencent's August-2026 open-weights flagship (Hunyuan line) — released **2026-08-28** (all coverage concurs; the first pass's "August 2026" now precise), a **770B total / 49B-active MoE with a Gated DSA + IndexCache architecture, built-in MTP speculative decoding, and a native 1M+ context**, published under **Apache 2.0 same-day with day-zero vLLM/SGLang recipes**, shipping across WorkBuddy, CodeBuddy, Yuanbao and ima. Second pass confirms the profile remains **vendor-appendix-only**: BenchLeader returns 404 and no independent harness has published rows — but the launch coverage resolves the pricing unknown (**hosted $0.834/$2.501**), documents the **Hy3→Hy4 DeepSWE jump (28.0 → 64.3)**, and records Tencent's internal blind test (163 experts, 203 engineering tasks) where it narrowly beat GLM 5.3 and Kimi K3. Top use case: self-hosted agentic coding and research workflows — on vendor numbers until the harnesses land.
- **Provider / access:** open weights on Hugging Face `tencent/Hy4-preview` (Apache 2.0); hosted at **$0.834 in / $2.501 out per 1M** (OpenRouter listing per killtheai — the first pass's "no verified hosted price" resolved); day-zero vLLM/SGLang self-hosting; **no OpenCode Zen listing**.
- **Release / knowledge:** **2026-08-28** (press release + all reviews concur); knowledge cutoff not stated publicly.
- **IDs:** `tencent/hy4` / `tencent/Hy4-preview` (no Zen ID).
- **Context window:** **1M+ native** ("a context window exceeding 1M tokens" — Tencent's own release; the first pass's 960K-in/64K-out split retained as the serving detail).
- **Modalities:** text in / text out (text-only; the Hunyuan vision line ships separately); reasoning yes; tool calls yes; JSON mode not separately verified.
- **Pricing (as of 2026-10-13):** hosted **$0.834/$2.501** per 1M; Apache 2.0 at $0 license — a 770B/49B MoE is a multi-node self-host, with built-in MTP speculative decoding easing decode throughput.
- **Architecture:** open-weights MoE, 770B total / 49B active; **Gated DSA (sparse attention) + IndexCache; built-in MTP** (killtheai's architecture write-up); further internals per the official GitHub/HF appendix.

### Raw benchmarks found

> **Coverage caveat, unchanged and now confirmed: BenchLeader 404; every row below traces to Tencent's official benchmark appendix** (via BenchLM and the launch reviews — benchgen/eesel/aitoolsreview/intelligentliving corroborate the same vendor figures). No independent harness (AA/Epoch/Vals/LiveBench/LMArena) has published rows for this ID. Scores remain provisional on vendor evidence.

Agent / tool use (vendor appendix):

- Terminal-Bench 2.1: **85.4%** (Vals variant 55.1%); MCP Atlas **83.7%**; Toolathlon-Verified **74.1%**; GDPval-AA **1678 Elo** (just under the 1750+ reference)
- WideResearch **83.9%**; DRACO **77.2%**; BankerToolBench **78.6%**; skillsBench 62.9%; JobBench 61.7%; ALE 22.8%; AutomationBench 32.1%; APEX-Agents 37.1%; CyberGym 78.4% — all retained unchanged
- **Tencent's internal blind test: 163 domain experts, 203 engineering tasks — Hy4-preview narrowly rated above GLM 5.3 and Kimi K3** (tuyuesouxin/toolporto reporting the press release; vendor-internal methodology, treated as narrative context, not a benchmark row)
- Claw-Eval / SWE Atlas: still no verified public score

Reasoning / knowledge (vendor appendix):

- GPQA Diamond: **92.3%** — clears the 90% reference (benchgen corroborates); HLE: **55.4% with tools / 43.4% without** — both at/above the 40% line; Apex (math) **74.2%**; CritPt **16.9%** — all retained
- AA Index / LCR / MLCR / Omniscience: still no verified public score (no AA page exists)

Coding (vendor appendix):

- SWE-bench Pro **65.7%**; SWE Multilingual **82.9%**; **DeepSWE 64.3% — the jump from Hy3's 28.0** (toolporto highlights the delta; the single most striking generational claim); NL2Repo 58.9%; TB 2.1 85.4%
- ProgramBench 17.5%; PostTrain Bench 35.6%; SWE-Marathon 31.9% — the weak spots retained
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: still no verified public score (unchanged gaps)

Long context:

- 1M+ native (Tencent's release); no MRCR/RULER/GraphWalks value — unchanged.

Document (context):

- OfficeQA Pro **66.2%** (retained).

### Normalized scores (1–100)

- **Tool use: 87/100.** Held: TB 2.1 85.4%, MCP Atlas 83.7%, Toolathlon-Verified 74.1%, WideResearch 83.9%, DRACO 77.2%, BankerToolBench 78.6% remain elite-for-open-weights vendor numbers — with GDPval 1678 just under the frontier cut, ALE 22.8% / AutomationBench 32.1% as the caps, and the no-independent-harness caveat standing.
- **Reasoning: 84/100.** Held: GPQA 92.3% and HLE 55.4%-with-tools clear the frontier references with Apex 74.2% strong — CritPt 16.9% and the absent AA Index/LCR/Omniscience rows keep it under 90 on vendor-only evidence.
- **Context window: 93/100.** Lowered from 95: the 1M+ window is now Tencent's own release language (native, not YaRN-extended), but zero measured retrieval-at-length exists.
- **Multimodal: 15/100.** Held: text-only by design.
- **Coding: 76/100.** Held: SWE Multilingual 82.9%, SWE Pro 65.7%, DeepSWE 64.3% (the 28.0→64.3 generational jump) and TB 2.1 85.4% are competitive vendor numbers — ProgramBench 17.5%, SWE-Marathon 31.9%, and the still-missing SWE-bench Verified row cap it.
- **Cost efficiency: 90/100.** Raised from 88: hosted pricing resolved at **$0.834/$2.501** (cheap for a 770B/49B flagship — undercuts GLM-5.2's $1.40/$4.40), Apache 2.0 at $0 license, day-zero vLLM/SGLang recipes, and built-in MTP decoding ease the self-host cost; the multi-node requirement tempers it.
- **Overall Score: 71/100.** (87 + 84 + 93 + 15 + 76) / 5 = 71.0, unchanged. Best-fit: the strongest fully-Apache-2.0 long-horizon text agent in this cohort *on vendor numbers* — with an internal blind test that beat GLM 5.3 and Kimi K3 as the headline context, a 2.3× DeepSWE generational jump, and now a verified hosted price — but every row awaits independent harness confirmation (BenchLeader 404, no AA page), so benchmark it on your own harness before committing production work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-25 report (BenchLeader 404 — disclosed, confirming no independent leaderboard coverage; Tencent's official press release and benchmark appendix; DDG-lite searches surfacing iadecider/eesel/benchgen/aitoolsreview/kompozy/tuyuesouxin/intelligentliving/toolporto/killtheai launch coverage — the 2026-08-28 release date, Gated DSA + IndexCache + MTP architecture, day-zero vLLM/SGLang recipes, the $0.834/$2.501 hosted pricing, the 163-expert blind test, and the Hy3→Hy4 DeepSWE 28.0→64.3 jump; the first-pass BenchLM rows retained unchanged with the vendor-only caveat now confirmed and strengthened); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
