# Claude Sonnet 3.5 — findings by Muse Spark 1.3

- Source: Anthropic/Claude Sonnet 3.5 (`anthropic/claude-3-5-sonnet`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5
- **Short description:** Anthropic's mid-2024 workhorse generation (June launch, October upgrade with computer use). Balanced text/image reasoning and coding for its era; superseded by Sonnet 4.x/5 line.
- **Provider / access:** Anthropic API (`claude-3-5-sonnet-20240620`, upgraded `claude-3-5-sonnet-20241022`), Claude app (Artifacts), AWS Bedrock / GCP Vertex. OpenCode Zen ID `anthropic/claude-3-5-sonnet`. Messages API.
- **Release / knowledge:** 2024-06-20 launch; 2024-10-22 upgraded snapshot (computer use beta, SWE 49.0%); knowledge cutoff April 2024
- **IDs:** `anthropic/claude-3-5-sonnet` (Zen); `claude-3-5-sonnet-20240620` / `claude-3-5-sonnet-20241022` (Anthropic API)
- **Context window:** 200,000 total with 8,192 max output (Anthropic-verified)
- **Modalities:** Text + image (screenshots) in; text out; reasoning yes; tool calls yes (computer-use cursor/click/type beta); JSON mode yes
- **Pricing (as of 2026-10-01):** $3.00 per 1M input / $15.00 per 1M output (Anthropic, unchanged across upgrade); no Zen Free ID — paid only
- **Architecture:** Proprietary dense (undisclosed params), closed-weights

### Raw benchmarks found

Agent / tool use:

- TAU-bench retail: **69.2%** (Anthropic official, upgraded Oct 2024; original June 62.6%)
- TAU-bench airline: **46.0%** (Anthropic official, upgraded; original 36.0%)
- OSWorld screenshot-only: **14.9%** (Anthropic official, 15 steps; **22.0%** with 50 steps) — SOTA at Oct 2024 launch vs next-best 7.8%
- Terminal-Bench 2.1: **no verified public score found** (model predates the harness)
- Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **59.4%** (Anthropic official 0-shot CoT, June launch); **65.0%** (upgraded 0-shot CoT per Oct 2024 addendum table)
- MMLU: **88.7%** (Anthropic official 5-shot; dataku cross-check confirms unchanged across upgrade)
- MATH: **78.3%** (upgraded; original 71.1%)
- BIG-Bench-Hard: **93.1%** (RankLLMs compilation of official figures)
- HLE: **no verified public score found** (model predates the harness)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **49.0%** (Anthropic official, upgraded Oct 2024 agent scaffold); **33.4%** (original June 2024)
- HumanEval: **92.0%** (June 0-shot); **93.7%** (upgraded per dataku/Anthropic compilation)
- LiveCodeBench: **38.1% Pass@1** (evals.report, unverified — marked provisional, not official vendor figure)
- LiveCodeBench Pro: **572 Codeforces Elo** (evals.report official entry, June 2024)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No verified MRCR / RULER / GraphWalks score found; 200K is a listing ceiling only

### Normalized scores (1–100)

- **Tool use: 70/100.** TAU retail 69.2% plus era-SOTA OSWorld 14.9% carry it, capped by zero Terminal-Bench/GDPval-era coverage and airline 46.0%.
- **Reasoning: 62/100.** GPQA 59.4–65.0% and MMLU 88.7% were strong for 2024 but sit mid-pack against 2026 frontier (GPQA 90%+); no HLE/LCR to lift it.
- **Context window: 70/100.** 200K tier baseline per methodology, capped by 8K max output and no measured at-limit retrieval.
- **Multimodal: 68/100.** Image/screenshot in with MMMU 68.3% and computer-use vision path, capped at image-only (no video/audio in, text-only out).
- **Coding: 70/100.** SWE-bench 49.0% plus HumanEval 93.7% were frontier-adjacent in late 2024, capped by dated LiveCodeBench 38.1% provisional and no modern coding-index signal.
- **Cost efficiency: 60/100.** $3/$15 per 1M paid-only tier per methodology reference point.
- **Overall Score: 68/100.** Mean of the five non-cost dims (70+62+70+68+70)/5 = 68.0; best fit as legacy balanced all-rounder, not a 2026 frontier pick.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-01
- Method: public internet research (Anthropic SWE-bench/3.5-models announcements, Claude 3.5 model-card addenda, AI-TLDR spec pages, AnotherWrapper pricing cross-check, evals.report, dataku upgrade review); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
