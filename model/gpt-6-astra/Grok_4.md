# GPT-6 Astra — findings by Grok (xai/grok-4)

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (flagship; also referenced in ChatGPT Work/Codex/Pro tiers; no distinct Free-tier variant confirmed)
- **Short description:** OpenAI’s most capable broadly deployed frontier model (released as GPT-6 family flagship), optimized for end-to-end computer use, agentic professional/software engineering workflows, science, and cybersecurity. Alias/variant notes: part of GPT-6 series alongside Sol/Luna; strong agentic/computer-use focus over pure chat.
- **Provider / access:** OpenAI API (`gpt-6-astra`), ChatGPT (Work/Codex/Plus/Pro/Business/Enterprise), Microsoft Azure, AWS Bedrock. Supports Chat Completions and Responses API.
- **Release / knowledge:** 2026-09-03 release; knowledge cutoff April 30, 2026
- **IDs:** `openai/gpt-6-astra` (no Free ID exists on Zen or equivalent free public endpoints confirmed)
- **Context window:** 1,050,000 total (max input ~922,000; max output 128,000) — verified via official OpenAI API model docs/page
- **Modalities:** text + image in; text out; reasoning yes (effort levels incl. xhigh/max); tool calls yes (computer use, hosted shell, code interpreter, MCP, apply patch, skills, web/file search, tool search); structured/JSON mode yes; no native audio/video in or non-text out confirmed
- **Pricing (as of 2026-09-25):** $10 input / $50 output / $1 cached input / $12.50 cache write per 1M tokens (standard <272k input; 2x input/cache + 1.5x output above 272k); Batch/Flex 50% off; Fast 2x; paid only (free-tier privacy caveat: N/A, enterprise/API paid with optional ZDR)
- **Architecture:** proprietary (no public params/total/active/MoE/open-weights details)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** (AA notes ~45 Elo drop vs prior on v2; no absolute Elo)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **SWE-Atlas-QnA 62%** (Artificial Analysis Coding Agent Index component); AutomationBench-AA **69%** (AA); OSWorld 2.0 **72.6%** (OpenAI/vendor + secondary reports); Agents’ Last Exam **59.3%** (OpenAI); Terminal-Bench 4.0 **57.9%** (OpenAI) / **58.18%** or **59%** (BenchLM/AA independent)

Reasoning / knowledge:

- GPQA Diamond: **96.0%** / **96%** / **96.1%** (OpenAI launch tables; BenchLM leader; AA-GPQA)
- HLE: **57.2%** (w/ tools; OpenAI)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **61.2** (early AA v4.1.1 / OpenAI table) / **53** (later AA update, tied #1 with Claude Fable 5.1); BenchLM overall ~**88.7** (#1)
- Omniscience Accuracy / Hallucination Rate: accuracy uplift ~4 pts; hallucination rate **51%** (from 92% prior at max; AA-Omniscience)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **DeepSWE v1.1 74.1%** (OpenAI; AA notes ~68% in one harness); FrontierSWE v2 **65.5%** (BenchLM lead); FrontierCode 1.1 Main **53.3%** / Extended **64.5%** (OpenAI); AA Coding Agent Index **62** or **67** (tied/lead variants); Terminal-Bench Science 0.1 **64.6%** (OpenAI)

Long context:

- MRCR v2 8-needle: **100%** (256K–512K band), **96.3%** (512K–1M band) (OpenAI); no RULER/GraphWalks verified public score found

### Normalized scores (1-100)

- **Tool use: 88/100.** Leading/SOTA computer use (OSWorld 2.0 72.6%, Agents’ Last Exam 59.3%, AutomationBench-AA 69%, Terminal-Bench 4.0 ~58-59% lead); strong agentic/tool/MCP/computer-use suite. Capped below 90-100 pure frontier TB2.1-style ~88%+ absolute by version differences and mid-50s TB4.0 absolute.
- **Reasoning: 95/100.** Frontier GPQA Diamond 96%+, FrontierMath Tier 4 ~97.6-98% saturation, strong AA Index (53-61 range, often tied/lead), HLE 57.2% solid. Capped slightly by HLE trailing some peers and AA variance across index versions.
- **Context window: 98/100.** Verified 1.05M total (>=1M tier 95-100); high retrieval (MRCR 100%/96.3% at 256K-1M bands) supports near-100; not full 100 absent perfect >=98% at extreme + other harnesses.
- **Multimodal: 65/100.** Image (+text) in, text out only (official); no verified video/audio/PDF-native or non-text out. Maps to +image-in mid tier (60-70).
- **Coding: 92/100.** Frontier DeepSWE 74.1% (meets 74%+), Terminal-Bench 4.0 lead, FrontierSWE v2 65.5% lead, solid AA Coding Index ~62-67. Capped by missing SWE-bench Verified public numbers and some peer ties/leads on alternate coding suites.
- **Cost efficiency: 30/100.** Paid $10/$50 per 1M (matches scale example $10/$50 ≈30); higher than prior gens but token-efficient on tasks; no $0 free tier.
- **Overall Score: 87.6/100.** Mean of five non-cost dims (88+95+98+65+92)/5 = 87.6 (half-up). Best-fit recommendation: top-tier agentic/computer-use + long-context professional/coding/science workloads where capability justifies premium pricing; pair with lower-tier GPT-6 Sol/Luna for cost-sensitive volume.

---

## Signature

- Provided by: **Grok (xai/grok-4)** — 2026-09-25
- Method: public internet research (OpenAI official model/API/system card/launch pages, Artificial Analysis, BenchLM, secondary verified reports from DataCamp/The Neuron/etc.); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
