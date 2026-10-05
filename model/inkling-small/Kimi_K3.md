# Inkling Small — findings by Kimi K3

- Source: Thinking Machines Lab / Inkling Small (`thinkingmachines/inkling-small`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Open-weight multimodal MoE from Thinking Machines Lab (12B active / 276B total); the smaller sibling of Inkling, positioned for cheap reasoning, math and knowledge work with image + audio input.
- **Provider / access:** OpenCode Zen `opencode/inkling-small` (Chat Completions-style); also hosted as `thinkingmachines/inkling-small` / `thinkingmachines/inkling-small-20260730` on DeepInfra, Together, BaseTen and the MegaBrain gateway.
- **Release / knowledge:** Released 2026-07-30 (evals.report, benchable.ai model pages); knowledge cutoff not published.
- **IDs:** `opencode/inkling-small` on Zen; `thinkingmachines/inkling-small-20260730` on DeepInfra/Together/BaseTen; `thinkingmachines/inkling-small` on getmegabrain.
- **Context window:** 524K tokens on DeepInfra/Together/MegaBrain listings; 1M on the BaseTen endpoint and per Zen metadata (max output 262,144 per MegaBrain). Verified via provider listings (benchable.ai, getmegabrain.com).
- **Modalities:** Text, image and audio in; text out; reasoning mode and tool/function calling supported (benchable supported-parameters list incl. Tools, Tool Choice, Reasoning, Include Reasoning); structured output not separately verified.
- **Pricing (as of 2026-10-05):** Open weights (free self-host). Hosted: DeepInfra $0.45 / $1.20 per 1M (cache read $0.10); Together and BaseTen listed at $0/$0 (free hosting tier, may be time-limited). Zen tier pricing not separately published.
- **Architecture:** Open-weight mixture-of-experts, ~276B total / ~12B active parameters (benchable.ai, getmegabrain.com).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Tool-calling support + 99% response success rate (benchable.ai hosted reliability metric)
- Instruction-following category accuracy 71% (benchable.ai category eval)

Reasoning / knowledge:

- ARC-AGI-1: **84%** accuracy (evals.report, Official, 2026-07-30)
- ARC-AGI-2: **40.14%** accuracy (evals.report, Official, 2026-07-30)
- Benchable category evals: Reasoning **98%**, Mathematics **95%**, General Knowledge **100%**, Ethics **100%**, Hallucination-acknowledgement **96%** (benchable.ai hosted suite)
- GPQA Diamond / HLE / CritPt: **no verified public score found**
- MMMU-Pro: **74%** (curated repo meta; vision benchmark, source not re-verified)

Coding:

- Benchable Coding category: **94%** accuracy (benchable.ai hosted suite)
- SWE-bench Verified / LiveCodeBench / SciCode: **no verified public score found**

Long context:

- No long-context retrieval benchmark (MRCR/RULER/GraphWalks) reported; 524K–1M window is provider-listed, not retrieval-verified.

### Normalized scores (1–100)

- **Tool use: 70/100.** Tool/API calling and reasoning toggles are exposed and hosted reliability is 99%, but no Terminal-Bench / Tau3 / GDPval agentic numbers exist and instruction following (71%) is the cap — provisional mid-band score.
- **Reasoning: 92/100.** ARC-AGI-1 84% and ARC-AGI-2 40.14% are frontier-class abstraction scores; 98%/95% on benchable reasoning/math categories. Capped by absence of GPQA/HLE/Index cross-checks.
- **Context window: 90/100.** 500K–1M tier (85–94): 524K verified on major gateways, 1M on BaseTen/Zen metadata; no retrieval-at-length benchmark reported.
- **Multimodal: 90/100.** Image + audio input with text output hits the 90–100 band (audio in); vision quality moderate per MMMU-Pro 74%.
- **Coding: 82/100.** 94% on benchable's coding category is strong, but no SWE-bench Verified / LiveCodeBench / SciCode public number caps it below frontier reference.
- **Cost efficiency: 97/100.** Open weights with $0 hosted tiers (Together, BaseTen) and cheap paid endpoint ($0.45/$1.20, cache $0.10) sit just under the $0 = 100 reference.
- **Overall Score: 85/100.** Mean of (70 + 92 + 90 + 90 + 82) / 5 = 84.8 → 85. Best fit: low-cost reasoning/knowledge/coding calls and multimodal-in workloads; escalate long-horizon agentic jobs.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-05
- Method: public internet research (evals.report, benchable.ai, getmegabrain.com provider/model pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
