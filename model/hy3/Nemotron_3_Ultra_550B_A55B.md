# hy3 — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** hy3 (Tencent Hunyuan Hy3)
- **Short description:** Tencent's 295B total / 21B active parameter MoE model, released July 6, 2026 (GA following April 2026 preview). Open-weight under Apache 2.0. Hybrid fast/slow thinking MoE with 256K context, 3 reasoning modes (no_think/low/high), MTP layer (3.8B params) for speculative decoding. Strong agentic coding, long-context, and instruction following. Co-designed with Tencent products (WorkBuddy, CodeBuddy, Miora).
- **Provider / access:** Hugging Face (`tencent/Hy3`), ModelScope, GitCode, CNB, OpenRouter (`tencent/hy3`), Tencent Cloud TokenHub, WorkBuddy (free until Aug 31, 2026), CodeBuddy, Miora. vLLM/SGLang deployment. OpenAI-compatible API. Reasoning effort: no_think (default), low, high.
- **Release / knowledge:** 2026-07-06 GA release (preview April 2026); knowledge cutoff not published.
- **IDs:** `tencent/hy3` (OpenRouter), `tencent/Hy3` (HF). Free on WorkBuddy until Aug 31, 2026.
- **Context window:** 256K tokens (262,144 per OpenRouter). Verified via Tencent model card, HF, OpenRouter, ARMES Docs.
- **Modalities:** Text input; text output. **No native multimodal** (text-only per ARMES/OpenRouter). Reasoning: yes (3 modes). Tool calls: yes (stable across scaffolds). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** OpenRouter: $0.1288/M in, $0.5336/M out (Tencent Cloud TokenHub). ARMES: $0.20/M in, $0.80/M out. Tencent Cloud: similar. Blended ~$0.30–0.40/M. Free on WorkBuddy until Aug 31, 2026. Apache 2.0 = self-host free.
- **Architecture:** 295B total params, 21B active MoE, 3.8B MTP layer. 80 layers + 1 MTP layer. 64 GQA heads (8 KV), head dim 128, hidden 4096, intermediate 13312. 192 experts, top-8 activated. BF16. Apache 2.0 license.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: **78.0%** — HF model card / HF evaluation results / ARMES Docs / Tencent blog
- SWE-bench Pro: **57.9%** — HF / ARMES / Tencent blog (swe-agent scaffold)
- SWE-bench Multilingual: **75.8%** — HF / ARMES
- Terminal-Bench 2.1: **71.7%** (harborframework harness) — HF / ARMES / Tencent blog / The Elec
- Terminal-Bench 4.0: **Japanese RP Bench Tegnike (2)** — ARMES (unclear metric)
- DeepSWE: **28.0%** (mini-swe-agent) — Tencent Hy4 card comparison / Traictory
- NL2Repo: **45.6%** — Traictory
- MCP-Atlas: **79.1%** — ARMES / Tencent blog (beats Opus 4.7 77.3)
- Toolathlon Verified: **48.5%** — ARMES
- APEX-Agents: **25.6%** — ARMES / Traictory
- SkillsBench: **55.3%** — ARMES
- WideSearch: **76.4%** — Traictory
- AutomationBench: **18.4%** — ARMES
- AA Briefcase v1.1: **950 Elo** — ARMES
- GDPval-AA v2.1: **1136 Elo** — ARMES
- GDP PDF: **11.2%** — ARMES
- Long Horizon Terminal Bench: **0.3** — ARMES (1/46 tasks pass@0.95)
- MRCR V2 (8-needle): **26.9%** — ARMES / Context Arena

Reasoning / knowledge:

- GPQA Diamond: **90.4%** — HF evaluation results / ARMES / Tencent blog / Traictory
- HLE (no tools): **47.0%** (Hy4 card comparison) / **33.5%** (ARMES) / **53.2%** (tencent.ai blog) — CONFLICTING
- HLE (with tools): **53.2%** (tencent.ai blog)
- BrowseComp: **84.2%** (beats DeepSeek V4-Pro 83.4, Opus 4.7 79.3, ~ties GPT-5.5 84.4) — tencent.ai blog / Traictory
- DeepSearchQA: **91.0%** — tencent.ai blog
- MMLU-Pro: **no direct score** (preview base: 65.76 5-shot)
- MMLU-Redux: **no direct score** (preview base: 86.86 5-shot)
- GSM8K: **95.37%** (preview base 4-shot)
- MATH: **76.28%** (preview base 4-shot)
- C-Eval: **no direct score** (preview base: 89.80 5-shot)
- MMMLU: **no direct score** (preview base: 80.15 5-shot)
- AA Intelligence Index: **25.3** (reasoning, ARMES)
- AA Coding Index: **58.8** (ARMES)
- AA Agentic Index: **25.6** (ARMES)
- AA-LCR v1.1: **79.0%** (ARMES)
- AA-LCR: **73.4%** (Tencent Hy4 card comparison)
- AA-Omniscience Index: **-18.5** (ARMES)
- CritPt: **4.9%** (ARMES)
- SciCode: **48.6%** (ARMES)
- TAU-3 Banking: **22.9%** (ARMES)
- Japanese RP Bench Tegnike: **94.6** (ARMES)

Coding:

- SWE-bench Verified: **78.0%** — HF / ARMES
- SWE-bench Pro: **57.9%** — HF / ARMES
- Terminal-Bench 2.1: **71.7%** — HF / ARMES / Tencent blog
- LiveCodeBench: **no direct score** (preview base: 34.86 1-shot)
- Code Migration / APEX-Agents / SkillsBench: **55.3%** (ARMES)
- MBPP-plus: **78.71%** (preview base 3-shot)
- CRUXEval-I: **71.19%** (preview base, best) / CRUXEval-O: **68.38%**
- NL2Repo: **45.6%** — Traictory
- DeepSWE: **28.0%** — Tencent Hy4 comparison / Traictory
- Long Horizon Terminal Bench: **0.3** (1/46 pass@0.95) — ARMES

Long context:

- MRCR V2 (8-needle): **26.9%** — ARMES / Context Arena
- Native 256K context verified
- RULER / GraphWalks / LOFT: **no direct scores** for Hy3 GA

Multimodal:

- **No native multimodal** (text-only per ARMES, OpenRouter, Tencent model card). Hy4 preview also text-only.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 72/100.** SWE-bench Verified 78%, TB 2.1 72%, MCP-Atlas 79% (beats Opus 4.7), SWE-Pro 58%, SWE-Multilingual 76%, Toolathlon 49%, WideSearch 76%, AutomationBench 18%, APEX-Agents 26%. Strong agentic coding and MCP tools but AutomationBench and APEX low. Capped by AutomationBench 18% and DeepSWE 28%.
- **Reasoning: 70/100.** GPQA Diamond 90%, HLE 33–53% (conflicting: ARMES 33.5%, tencent.ai 53.2%, Hy4 comparison 47%), BrowseComp 84%, DeepSearchQA 91%, AA Index 25, CritPt 5%, Omniscience -18, SciCode 49%, AA-LCR 79%, MATH 76%. Excellent GPQA/BrowseComp/DeepSearch but HLE conflict and AA Index low. Capped by HLE discrepancy (33% vs 53%) and AA Index 25.
- **Context window: 75/100.** 256K native (256K–512K tier = 70–80). AA-LCR 79%, MRCR 27%. Good but not 1M+ native. Capped by MRCR 27% and no RULER/GraphWalks/LOFT for GA.
- **Multimodal: 15/100.** Text-only input/output. No vision, audio, video. Floor for text-only model.
- **Coding: 75/100.** SWE-bench Verified 78%, TB 2.1 72%, SWE-Pro 58%, SWE-Multilingual 76%, MCP-Atlas 79%, NL2Repo 46%, DeepSWE 28%, LHTB 0.3. Strong SWE-bench/TB/MCP but DeepSWE and LHTB very low. Capped by DeepSWE 28% and LHTB near-zero.
- **Cost efficiency: 85/100.** $0.13–0.20/M in, $0.53–0.80/M out. Blended ~$0.30–0.40/M. Free on WorkBuddy (limited time). Apache 2.0 = self-host free. Good value but not cheapest in class.
- **Overall Score: 61/100.** Mean of (72+70+75+15+75)/5 = 61.4 → 61. Queue shows 71.4 — significant gap. My score heavily penalized by multimodal=15 (text-only). Agent reports in queue may not penalize text-only as severely. LLM Stats Score 42.5 (#62). Best fit: strong open-weight agentic coder with 256K context; text-only limits generalist use.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Tencent HF model card, tencent.ai blog, Tencent Cloud announcement, ARMES Docs, Traictory comparison, HF evaluation results, LLM Stats, The Elec, Emergent.sh, systemcards.org); scores normalized 1–100 per model-comparison.md methodology. **Critical conflicts:** HLE no-tools (ARMES 33.5% vs tencent.ai 53.2% vs Hy4 comparison 47%) — marked as unresolved discrepancy. Text-only modality confirmed by multiple sources. GA vs Preview benchmark differences noted (SWE-Pro 46→58, TB 2.1 58→72).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.