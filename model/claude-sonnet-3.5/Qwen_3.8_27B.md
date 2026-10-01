# Claude Sonnet 3.5 — findings by Qwen 3.8 27B

- Source: Anthropic — Claude 3.5 Sonnet (`anthropic/claude-3-5-sonnet`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5 (Claude 3.5 Sonnet)
- **Short description:** Anthropic's mid-2024 workhorse — the "Sonnet" tier of the Claude 3 family, released twice: the original (2024-06-20) and an upgraded version (2024-10-22) that became the default model on claude.ai and shipped the first public-beta computer use. Balanced text/image reasoning with class-leading coding for its era; now two generations behind the 2026 frontier.
- **Provider / access:** Anthropic first-party API `anthropic/claude-3-5-sonnet` (evaluated entry, Messages API); also Amazon Bedrock and Google Vertex AI. No Free tier ID exists (repo meta `noFreeId: true`).
- **Release / knowledge:** Original released 2024-06-20 (`claude-3-5-sonnet-20240620`); upgraded version 2024-10-22 (`claude-3-5-sonnet-20241022`), same price and speed as the original. Knowledge cutoff early-to-mid 2024.
- **IDs:** `anthropic/claude-3-5-sonnet` (current); `claude-3-5-sonnet-20241022` (upgraded, the relevant weights for the benchmark numbers below); `claude-3-5-sonnet-20240620` (original).
- **Context window:** 200K total with 64K max output (repo meta curation; Anthropic docs). Verified against Anthropic API docs and secondary sources.
- **Modalities:** Text + image in, text out. Tool use: yes (agentic, JSON). Upgraded version adds **computer use** (public beta: screenshot perception, cursor control, typing) — the first frontier model to offer it. No audio/video input; no reasoning traces.
- **Pricing (as of 2026-10-01):** Paid $3.00 in / $15.00 out per 1M (unchanged since the original launch; the Oct 2024 upgrade kept "the same price and speed"). No Free ID on the evaluated platform.
- **Architecture:** Proprietary dense transformer (Anthropic Claude 3 family); weights closed. Upgraded model confirmed ASL-2 under Anthropic's Responsible Scaling Policy; pre-deployment tested jointly by US AI Safety Institute and UK Safety Institute.

### Raw benchmarks found

Agent / tool use (Anthropic, "Introducing computer use, a new Claude 3.5 Sonnet" post, 2024-10-22, upgraded model unless noted):

- SWE-bench Verified (agentic coding): **49.0%** (up from 33.4% original — SOTA at release, ahead of all publicly available models incl. o1-preview; Claude 3.5 Haiku scored 40.6% on the same harness)
- TAU-bench (retail domain, agentic tool use): **69.2%** (up from 62.6% original)
- TAU-bench (airline domain, harder multi-turn): **46.0%** (up from 36.0% original)
- TAU-bench (June 2024 launch figure, original model): **80.5%**
- OSWorld (computer use, screenshot-only): **14.9%** — next-best AI system 7.8%; **22.0%** with more steps permitted
- Terminal-Bench 2.1 / GDPval-AA / Claw-Eval / Toolathon: no verified public score found (predates those harnesses)

Reasoning / knowledge:

- MMLU (upgraded 3.5 Sonnet): **88.7%** (Claude 3 Opus 86.8% for reference; original 3.5 Sonnet launched at 74.9%)
- GPQA Diamond (June 2024 original, launch table): **59.4%**; upgraded-version table not retrievable in this pass
- BIG-Bench-Hard: **93.1%**
- HumanEval: **92.0%** (original launch)
- HLE / CritPt / LCR / AA Intelligence Index / BenchLM overall: no verified public score found

Coding:

- SWE-bench Verified: **49.0%** (upgraded; original 33.4%) — SOTA at its release
- HumanEval: **92.0%**
- LiveCodeBench / SWE-bench Pro / DeepSWE / SciCode / Vibe Code Bench: no verified public score found in this pass

Multimodal:

- Image input supported since the June 2024 launch (vision used in launch benchmarks); computer-use screenshots in the Oct 2024 beta. No video/audio input; no verified dedicated vision-leaderboard score retrieved in this pass.

Long context:

- 200K window, 64K max output; no MRCR/RULER-style retrieval report found for this model.

### Normalized scores (1–100)

- **Tool use: 58/100.** Agentic tool use was the headline strength at release — TAU-bench retail 69.2% and airline 46.0% led the field in late 2024, and computer use (OSWorld 14.9% screenshot-only / 22.0% extended) was first-to-market — but on the 2026 scale those numbers sit just inside the mid band, and the model predates TB2.1/GDPval-class agentic harnesses entirely.
- **Reasoning: 48/100.** MMLU 88.7% and BIG-Bench-Hard 93.1% show strong knowledge, but GPQA Diamond 59.4% (June 2024 table; the upgraded card's value was not retrievable here) is below the 60–80% mid band and far under 2026 models (e.g. GPQA 75–82% for mid-tier open models a year later) — a full generation behind on hard reasoning.
- **Context window: 70/100.** Exactly 200K total, which maps to 70 on the tier scale (200K–500K band, 200K = 70); 64K max output is at (not below) the caveat threshold. Long-context quality was solid for 2024 but no retrieval report was found to push it higher.
- **Multimodal: 65/100.** Text + image in / text out — image input qualifies for the 60–70 band; the image stack was competitive at launch (vision-led marketing plus the first computer-use screenshot pipeline), but there is no audio/video and no 2026-generation vision benchmark evidence.
- **Coding: 40/100.** SWE-bench Verified 49.0% was state-of-the-art at its release and still clears a fair number of 2026 mid-tier scores, but it trails current open mid-class references (e.g. GPT-OSS-120B-class ~52.4 in this site's nemotron comparison data) and the model has no scores on post-2025 harnesses (SWE-bench Pro / DeepSWE / TB2.1) — fine for single-issue fixes, behind for repo-scale agentic work.
- **Cost efficiency: 60/100.** $3/$15 per 1M with no Free ID matches the methodology's $3/$15 reference point exactly (~60).
- **Overall Score: 56.2/100.** Mean of (58 + 48 + 70 + 65 + 40) / 5 = 56.2. Best fit: a predictable, well-understood mid-tier for text/image tasks with stable pricing — still serviceable for coding fixes, document Q&A, and tool-calling agents, but a current-generation mid-tier model beats it on reasoning, agentic coding, and (for image work) vision.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research — Anthropic's "Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku" post (anthropic.com/news/3-5-models-and-computer-use, 2024-10-22: SWE-bench Verified 33.4%→49.0%, TAU-bench retail 62.6%→69.2% and airline 36.0%→46.0%, OSWorld 14.9% screenshot-only / 22.0% extended, Haiku 40.6%, same price/speed, ASL-2 + US/UK AISI pre-deployment testing, computer-use public beta); launch-coverage citations of Anthropic's June 2024 announcement (morphllm.com/claude-benchmarks and aireleasetracker.com: SWE 33.4%, GPQA Diamond 59.4%, HumanEval 92.0% for claude-3-5-sonnet-20240620); hougao.com launch summary (TAU-bench 80.5% June 2024, GPQA 59.4%); gitnux.org Claude statistics (upgraded MMLU 88.7%); galileo.ai complete guide (BIG-Bench-Hard 93.1%); repo meta.json curation (200K/64K, text+image in, $3/$15, noFreeId); the official Oct 2024 model-card addendum PDF was located (www-cdn.anthropic.com/c7822cdc35ad788ec87e14b3a9d45010f1f86c38.pdf) but its text layer was not extractable in this pass, so upgraded-version GPQA/LiveCodeBench figures are marked not-found rather than inferred. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
