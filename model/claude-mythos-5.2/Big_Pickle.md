# Claude Mythos 5.2 — findings by Big Pickle

- Source: Anthropic/Claude Mythos 5.2
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's restricted, security-vetted configuration of Claude Fable 5.2 — the same underlying weights, deployed with certain cyber and bio safeguards lifted for verified defensive-security and life-sciences work. Access is gated behind Anthropic's Cyber Verification Program (CVP) and Life Sciences program, so general API consumers cannot use it.
- **Provider / access:** Anthropic first-party (`anthropic/claude-mythos-5.2`), CVP / Life Sciences vetted accounts only. Messages API with tool use and extended thinking.
- **Release / knowledge:** Released 2026-11-09; knowledge cutoff 2026-06 (same base model as Fable 5.2).
- **IDs:** `anthropic/claude-mythos-5.2`; no free or public tier.
- **Context window:** 1,000,000 total / 128,000 max output (vendor model card).
- **Modalities:** text + image + PDF in; text out; reasoning yes; tool calls yes; structured output yes.
- **Pricing (as of 2026-11-11):** $8.00 / $40.00 per 1M in/out; cache read $0.20. (`meta.json` carries the stale $10/$50 pre-launch figure.)
- **Architecture:** proprietary; shares Fable 5.2 weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.5%** (vendor system card, no safeguards)
- Terminal-Bench Science: **75.3%** (vendor system card, no safeguards)
- CyScenarioBench (Irregular, 10-challenge subset): **76.3%** solve rate — best released model at publication (Opus 5.5 67.6%, Mythos 5.1 61.7%, Sonnet 5.5 46.1%)
- ExploitBench (41 V8 environments): **97% Cap%**, mean **15.46/16** capability flags, **90.0%** full arbitrary code execution (369/410 runs)
- ExploitGym: **331/869** intended-vulnerability exploits in 2h (**38.1%**), **341/869** in 6h (**39.2%**)
- Binary Exploitation Benchmark (formerly OSS-Fuzz): **148** control-flow hijacks out of 831 entry points (**17.8%**)
- CVE Rediscovery: **89.6%** (no safeguards)
- OSWorld / WANDR / DRACO / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no Mythos-specific public score found.

Reasoning / knowledge:

- GPQA Diamond / HLE / HLE-Diamond / LCR / CritPt / AA Intelligence Index / BenchLM overall: no Mythos-specific public score found. BenchLM has 16 source-linked rows for `claude-mythos-5-2` but no leaderboard rank; AA has no page for this ID.

Coding:

- SWE-bench Verified / SWE-Pro / DeepSWE / LiveCodeBench / SciCode: no Mythos-specific public score found (Fable 5.2 numbers are the closest proxy; identical weights, different safeguard configuration).

Life sciences (vendor system card):

- Biomedical image analysis: **80.7%**
- Binder design: **85.1%**
- Protein design: **64.6%**
- SingleCellBench: **65.6%**
- Protocols: **77.1%**
- Protein domain identification: **91.8%**
- Mutation attribution: **51.5%**
- Morphology: **35.2%**
- Medicinal chemistry: **69.0%**

Long context:

- No Mythos-specific MRCR / RULER / GraphWalks numbers found; the 1M window is inherited from the shared Fable 5.2 base.

### Normalized scores (1–100)

- **Tool use: 95/100.** TB 4.0 70.5% (higher than Fable 5.2's 67.6% on the same vendor harness), TB-Science 75.3%, CyScenarioBench 76.3% and ExploitBench 97% Cap% are frontier-grade agentic evidence; capped by the narrow, cyber-only benchmark set and the absence of OSWorld/DRACO/GDPval numbers.
- **Reasoning: 93/100.** CVE Rediscovery 89.6%, ExploitGym 38.1% and the 91.8% protein-domain result show deep multi-step reasoning; no GPQA/HLE/AA Index for this ID keeps it just below Fable 5.2's measured 95.
- **Context window: 95/100.** 1M-token tier with 128K output; no independent retrieval measurement at 512K+.
- **Multimodal: 80/100.** Text + image + PDF input only; biomedical image analysis 80.7% is strong, but no audio/video and no multimodal agent benchmarks.
- **Coding: 94/100.** No Mythos-specific SWE-bench run was published; scored from the shared Fable 5.2 coding stack (SWE-Pro 93%, DeepSWE 74.3%) with a small haircut for the unmeasured configuration.
- **Cost efficiency: 38/100.** $8/$40 per 1M with $0.20 cache reads — same as Fable 5.2; vetted access, no free tier.
- **Overall Score: 91/100.** (95 + 93 + 95 + 80 + 94) / 5 = 91.4 → 91. Best fit: authorized vulnerability research, exploit triage, and biosecurity/life-sciences analysis where the cyber/bio guardrails would otherwise block legitimate defensive work.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-11
- Method: public web research (Anthropic launch page, Claude 5.2 system card cyber/life-sciences sections, BenchLM ledger probe, AA slug lookup); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Anthropic — Claude Fable 5.2 and Mythos 5.2 System Card](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card)
  - [BenchLM — Claude Mythos 5.2](https://benchlm.ai/models/claude-mythos-5-2)
- Future sources: add a new file next to this one, e.g. `Claude_Mythos_5.2_Update.md`, using the same headings.
