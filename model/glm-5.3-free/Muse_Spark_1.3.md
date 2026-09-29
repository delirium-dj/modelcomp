# GLM 5.3 Free — findings by Muse Spark 1.3 Contributor

- Source: Z.AI/GLM-5.3, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC); re-verified 2026-09-29 (UTC, user-signed-off re-research: paid-5.3 vendor table + AA independents added as same-checkpoint evidence, release firmed 08-14, context dual-figure noted; Tool 82 → 87, Reasoning 76 → 86, Coding 80 → 87, Overall 65 → 69)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free (Z.AI flagship open-weights)
- **Short description:** Z.AI's flagship open-weights GLM-5.3 MoE model optimized for agentic software development, complex reasoning, and multi-step tool execution.
- **Provider / access:** Z.AI via API + HF weights; OpenCode Zen `opencode/glm-5.3-free` (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-08-14 release (z.ai blog; API 08-18; HF weights ~08-28); knowledge cutoff undisclosed (re-verified 2026-09-29)
- **IDs:** `opencode/glm-5.3-free` (Free Zen tier exists)
- **Context window:** 204K Zen-tier figure retained (paid native is 1M per AA/vendor — free-tier served window unverified, dual-figure noted — re-verified 2026-09-29)
- **Modalities:** text in/out; reasoning yes; tool calls yes; multi-step execution yes
- **Pricing (as of 2026-09-18):** Free Zen tier available (promotional fast agentic coding tier)
- **Architecture:** open-weights MoE (same base as 5.2, extreme post-training per z.ai blog); HF `zai-org/GLM-5.3` (re-verified 2026-09-29)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** vendor (z.ai blog); **83.9%** AA-independent (re-verified 2026-09-29); Terminal-Bench 3.0: **28.3%**; Terminal-Bench 4.0: **41.9%** AA-independent (re-verified 2026-09-29)
- Toolathlon Verified: **73.0%**; AutomationBench v1.0.6: **48.2%** (z.ai blog — replaces 62% family proxy — re-verified 2026-09-29)
- Agents' Last Exam: **28.5%** vendor / **28.6%** ALE-CLI (z.ai blog — re-verified 2026-09-29)
- GDPval-AA v2: **1769 Elo** (z.ai blog, AA-evaluated — re-verified 2026-09-29)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.7%** AA-independent (re-verified 2026-09-29)
- HLE with tools: **62.5%** (z.ai blog); HLE: **42.3%** AA-independent (re-verified 2026-09-29)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **45** (AA page max; **44.9** v4.3 per AI Atlas; **60** launch-day composite per Cocoloop — config variance noted — re-verified 2026-09-29); BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- DeepSWE v1.1: **66.9%**; FrontierSWE: **78.1%**; SWE-Marathon v1.1: **42.5%**; PostTrainBench: **39.8%** (z.ai blog — re-verified 2026-09-29); SWE-bench Verified/Pro: **no 5.3-specific verified absolute found**
- NL2Repo: **58.0%**; ProgramBench: **19.0%** (z.ai blog — re-verified 2026-09-29)
- SciCode: **59.0%** AA-independent (re-verified 2026-09-29)
- CyberGym: **84.5%**; ExploitBench: **54.4%**; ExploitGym 105/130 (z.ai blog — re-verified 2026-09-29)
- LiveCodeBench / Vibe Code Bench / Coding Index: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 88.2% (83.9% AA-independent) plus Toolathlon 73.0%, AutomationBench 48.2%, ALE 28.5% and GDPval 1769 show elite same-checkpoint agency; capped by no Tau/Claw rows and paid-API provenance of vendor cells.
- **Reasoning: 86/100.** GPQA 91.7% AA-independent plus HLE-tools 62.5% and Index 45 show strong flagship reasoning; capped by no LCR/CritPt numbers.
- **Context window: 70/100.** 204K Zen-tier figure retained (1M native unverified for free tier); capped below 1M models pending served-window proof.
- **Multimodal: 15/100.** Text-only; 15 is the text-only floor.
- **Coding: 87/100.** DeepSWE 66.9% plus FrontierSWE 78.1%, SciCode 59.0% (AA) and CyberGym 84.5% show strong same-checkpoint engineering; capped by no SWE-Verified/LiveCode absolutes.
- **Cost efficiency: 100/100.** Free Zen promotional tier.
- **Overall Score: 69/100.** Mean of the five non-cost dims (87+86+70+15+87)/5 = 69.0 → 69; best-fit free flagship GLM agentic-coding pick — now evidence-backed.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Artificial Analysis Astra article, Z.AI family context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
