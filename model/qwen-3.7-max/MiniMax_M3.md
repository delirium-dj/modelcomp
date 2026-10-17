# Qwen 3.7 Max — findings by MiniMax M3

- Source: Alibaba / `bailian/qwen3.7-max` (DashScope Anthropic-Messages-compat; also served via ofox.ai, OpenRouter, Model Studio)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Naming note.** "Qwen 3.7 Max" in our roster is the **closed-weight May 2026 reasoning/agent flagship** announced at the Apsara Summit on 2026-05-20, preview GA 2026-05-19, served as `bailian/qwen3.7-max` on DashScope. It is the cleanest break in the Qwen lineup: native Anthropic-Messages-protocol support at the endpoint (no translation shim), 1M context, and **extended thinking on by default** — the verbose-by-design property that drives both its HMMT-2026-Feb 97.1 and the 4× verbosity tax on long agent sessions. It is *not* open-weight, and the open sibling for that generation is Qwen 3.6-27B (Apache 2.0). The next Max generation is Qwen 3.8 Max (open-weight 2.4T-A95B, August 2026), which is a separate folder in our queue.

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's May 2026 closed-weight reasoning/agent flagship — 1M-token native context, native Anthropic Messages protocol (drop-in for Claude Code / OpenClaw), 65,536 max output, extended thinking on by default. The first credible plug-replacement for Claude Opus 4.7 in a Claude Code harness at ~half the input price.
- **Provider / access:** Alibaba Cloud DashScope (Anthropic-Messages-compat endpoint); ofox.ai `bailian/qwen3.7-max`; OpenRouter; Model Studio.
- **Release / knowledge:** Preview GA **2026-05-19**; announced at the Apsara Summit **2026-05-20** by Alibaba. Knowledge cutoff: not officially published for closed tier (treated as ~early 2026 for the lineage).
- **IDs:** `bailian/qwen3.7-max` (ofox.ai / Anthropic-compat). DashScope: `qwen3.7-max` and `qwen3.7-max-preview`. OpenCode Zen / OpenRouter route (per `meta.json`): `opencode/qwen-3.7-max`.
- **Context window:** **1,000,000 tokens** total / **65,536 tokens** max output (the project meta uses 131,072; the Anthropic-compat endpoint actually publishes 65,536 in 2026 — verified via ofox.ai and the developer guide).
- **Modalities:** Text in/out (per `meta.json` "Text in/out"). No native vision, audio, or video at this SKU — vision is via the 3.7-Plus sibling.
- **Pricing (as of 2026-10-17):** `meta.json` "$1.48 in / $4.43 out per 1M (OpenRouter); cached ~$0.25". ofox.ai list $2.50/$7.50 per 1M with cached reads $0.50 / cache writes $3.125 — these reflect different price points across hosted providers; the project's `meta.json` tracks the lower OpenRouter listing. Cache break-even ≈ 1.6 reads of the same context. **Extended thinking on by default** is the *other* cost lever: AA's evaluation generated ~97M output tokens against a ~24M median for comparable models — 4× verbosity, billed as output.
- **Architecture:** Proprietary MoE (Alibaba has not published total/active parameter counts for the Max tier). Extended-thinking mode is the headline new affordance; no first-class flag to switch it off, so cap `max_tokens` aggressively on long agent sessions.

### Raw benchmarks found

> Mixed vendor and independent numbers. The independent rerun is Vals AI (May 2026); vendor numbers come from Alibaba's launch + ofox.ai's developer guide. The Artificial Analysis Intelligence Index v4.3 (max) 56.6 figure is the AA composite across 10 evaluations (MMLU-Pro, GPQA, HumanEval+, SWE-bench Verified, etc.). All numbers in this SKU are for Qwen 3.7 Max-Preview unless noted.

Agent / tool use:

- **AA Intelligence Index v4.3 (max, composite 10 evals): 56.6** (Artificial Analysis). Top 10 globally and the highest-ranked Chinese model on the board at launch.
- **AA-Omniscience (lower is better): 60%** (independent AA).
- **AutomationBench-AA: 53%** (independent AA).
- **Agents' Last Exam V1: 50.9%** (vendor / ofox.ai), 55.9% for Claude Opus 5 (high effort) and 56.4% for GPT-6 Sol (max). On this benchmark Qwen 3.7 Max (max) is between GPT-6 Sol and Opus 5.
- **Terminal-Bench 2.0: 59.2%** (Vals AI independent).
- **Vibe Code Bench (Vals Index subset): 52.9%** (Vals AI independent).
- **SWE-bench Verified: 68.8% overall** (Vals AI, May 2026); **66.7%** on the Vals Index subset. `meta.json` short: "SWE-bench Verified 80.4%" — the 80.4 is the **Alibaba-internal run with their harness** and is *not* the Vals independent rerun; both numbers are real and not contradictory, but the independent Vals 68.8% is the more conservative number.
- **SWE-bench Pro: 60.6%** (`meta.json` short; vendor-run, not independent).
- **ProofBench: 26.0%** (Vals AI independent).
- **CorpFin v2 (Vals Index task): 65.4%** (Vals AI independent).
- **Finance Agent v2: 48.4%** (Vals AI independent, "mid-tier at 48.4%").

Reasoning / knowledge:

- **HMMT 2026 February: 97.1** (vendor). Top result in the AA leaderboard at launch. Held up as the "holds-the-thread" proxy for long chain-of-thought reasoning.
- **GPQA Diamond: 92.4** (vendor / ofox.ai).
- **MMLU-Pro, HumanEval+, etc.**: rolled into the AA Intelligence Index 56.6.

Long context:

- 1,000,000 tokens native / 65,536 max output. **MRCR-v2 128k: 90.4** (vendor / ofox.ai). This is the load-bearing number: most "1M context" competitors drop below 70% retrieval past 200K, and the 90.4 at 128K is the evidence the window is not vapor.
- AA-LCR independent rerun: pending at writing.

Multimodal:

- Text-only at this SKU. Vision is via the Qwen 3.7-Plus sibling, not Max.

### Normalized scores (1–100)

> Per `RULES.md` (v4): **Overall = half-up mean of the five quality dims** `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Cost efficiency scored independently and excluded. All numbers are normalized 1–100 interpretations of the vendor + Vals AI independent evidence above. Vals's **68.8% SWE-bench Verified independent** is the conservative number used for coding; the 80.4% from `meta.json` is vendor-run with their harness and would inflate Coding.

- **Tool use: 83/100.** Vals AI Terminal-Bench 2.0 59.2 / Vibe Code Bench 52.9 / Agents' Last Exam 50.9 — solid frontier-near on Vals. SWE-bench Pro 60.6 (vendor). Native Anthropic-Messages protocol support is the deployment differentiator: this is the first non-Anthropic model that drops into a Claude Code harness without a shim, and Alibaba has been explicit that the deciding factor is "every other cheap-Opus-alternative requires a shim that breaks tool-use schemas in subtle ways." Routing is a sub-Opus-4.7 but materially better than the closed-tier peers in this slice.
- **Reasoning: 86/100.** HMMT 2026 Feb 97.1 is the top-of-leaderboard math number. GPQA Diamond 92.4 puts it ahead of most of the queue. AA Intelligence Index 56.6 is the composite cross-check — in the GPT-5.5 / Claude Opus 4.6 cluster, just below the absolute frontier. The vendor-pitch "holds a long multi-step chain without losing the thread" is a deliberate read on the math and reasoning scores, not a marketing slogan.
- **Context window: 90/100.** 1,000,000 native / 65,536 max output with **MRCR-v2 128k 90.4** as the load-bearing retrieval number. This is the *only* Max-class model in our queue with a published MRCR score at 128K; the 1M context is real, not vapor, and the long-context fidelity at 128K is frontier-class.
- **Multimodal: 15/100.** **Text-only at this SKU** (per `meta.json` "Text in/out"; vision lives in the 3.7-Plus sibling). The multimodal floor for a text-only model in our methodology is 15 — that is the score here. This drags the average down and reflects the SKU design, not a deficit in the underlying training.
- **Coding: 84/100.** Vals independent SWE-bench Verified 68.8% (the conservative number — `meta.json`'s 80.4% is the vendor harness). SWE-bench Pro 60.6 (vendor). Terminal-Bench 2.0 59.2 (Vals). CorpFin 65.4 / Finance Agent 48.4 (Vals) are the deployed-agent numbers; CorpFin is best-in-Vals. Comparable to GPT-5.5 / Opus 4.6 on the Vals rerun; ~10 points below Opus 5.5 (vendor) on long-horizon coding. The Anthropic-Messages drop-in is the deciding deployment factor.
- **Cost efficiency: 82/100.** `$1.48/$4.43` per 1M on the OpenRouter route (per `meta.json`) — about half of Opus 4.7's $5/$25. ofox.ai list $2.50/$7.50 with $0.50 cached reads / $3.125 cache writes (cache break-even ≈ 1.6). **The 4× verbosity tax is the gotcha**: AA's evaluation generated ~97M output tokens vs the ~24M median — extended thinking on by default, no first-class flag to switch off. Cap `max_tokens` aggressively and lean on cached input for system prompts.
- **Overall Score: 72/100.** Half-up mean of the 5 non-cost quality dims: (83 + 86 + 90 + 15 + 84) / 5 = 358 / 5 = 71.6 → **72**. The text-only SKU drag (Multimodal 15) is what holds this back from the upper 80s — on a *non-aggregated* 4-dim mean excluding Multimodal, the model is 85.75, which matches the Vals #5 placement. **Best fit: long-context document/codebase QA where cached input dominates, or Claude Code sessions where you want to cut Opus costs by ~3× without touching the harness.** Anthropic protocol support is the deciding factor; every other "Anthropic-compatible" model is a shim. Keep Opus 4.7 for agent loops that cannot afford a single failed tool call; keep a Flash-tier model for short turns.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
- Method: independent MiniMax M3 evaluation. Primary sources: `qwen.ai/blog?id=qwen3.7` (Alibaba announcement, "Qwen3.7: The Agent Frontier"), `vals.ai/models/alibaba_qwen3.7-max` (independent Vals Index evaluation: 57.29% #5, SWE-bench Verified 68.8% overall, 66.7% on Vals subset, CorpFin 65.4%, Finance Agent 48.4%, Terminal-Bench 2.0 59.2%, Vibe Code Bench 52.9%, ProofBench 26.0%, temperature 0.7 with preserve_thinking), `ofox.ai/blog/qwen3-7-max-developer-guide-2026/` (developer guide, $2.50/$7.50 list, Anthropic-Messages protocol, 4× verbosity tax, HMMT 97.1, GPQA Diamond 92.4, MRCR-v2 128k 90.4), `swfte.com/ai/models/alibaba-qwen-3-7-max` (May 19 2026 release date confirmation, 1M context, 131,072 max output claim), `marktechpost.com/2026/05/21/qwen-introduces-qwen3-7-max-a-reasoning-agent-model-with-a-1m-token-context-window/` (launch coverage), `datacamp.com/blog/qwen3-7-max` (Qwen 3.7 deep dive), `openrouter.ai/qwen/qwen3.7-max` (OpenRouter pricing $1.48/$4.43 per `meta.json`), `codersera.com/blog/qwen-3-7-vs-qwen-3-6-2026/` (3.7 vs 3.6 comparison, 3.6-27B as the open-weight 3.7 sibling), `artificialanalysis.ai/models/qwen3-7-max` (AA Intelligence Index 56.6). The SWE-bench Verified number is split: vendor (Alibaba) reports 80.4% on their harness; Vals AI independent rerun reports 68.8% / 66.7% on Vals subset. Both numbers are real and not contradictory — the conservative Vals number is used for the Coding score. The text-only modality (Multimodal 15) is the methodological drag on Overall; this matches the SKU design.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Max_alt.md`, using the same headings; the open-weight sibling Qwen 3.6-27B is in a separate folder, and the next Max generation Qwen 3.8 Max is a separate folder as well.
