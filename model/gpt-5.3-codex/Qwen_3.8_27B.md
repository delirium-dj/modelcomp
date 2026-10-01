# GPT-5.3-Codex — findings by Qwen 3.8 27B

- Source: OpenAI/gpt-5.3-codex, e.g. OpenCode Zen `opencode/gpt-5.3-codex`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's most capable agentic coding model (Feb 2026 release) — optimized for Codex/similar agentic coding environments; merges GPT-5.2-Codex's frontier coding with GPT-5.2's reasoning/knowledge and is 25% faster; first OpenAI model classified High capability for cybersecurity tasks.
- **Provider / access:** OpenAI Responses API only (Chat Completions and Batch not supported at docs fetch time); available in Codex app, CLI, IDE extension, and web. `reasoning.effort`: low, medium, high, xhigh.
- **Release / knowledge:** released 2026-02-05; knowledge cutoff Aug 31, 2025 (OpenAI docs, verified).
- **IDs:** `gpt-5.3-codex` (alias = default snapshot). No Free ID — scored on paid pricing.
- **Context window:** 400,000 total — 272,000 max input + 128,000 max output (OpenAI docs).
- **Modalities:** text + image in, text out; reasoning tokens; tools: function calling, web search, hosted shell, skills; compaction support for long-running workflows.
- **Pricing (as of 2026-10-01):** $1.75 / $14 per 1M input/output tokens; cached input $0.175/1M.
- **Architecture:** proprietary, parameter count undisclosed; co-designed/trained/served on NVIDIA GB200 NVL72.

### Raw benchmarks found

All below: GPT-5.3-Codex at xhigh reasoning effort, from the "Introducing GPT-5.3-Codex" post appendix (Feb 5, 2026); specs from OpenAI docs.

Agent / tool use:

- Terminal-Bench 2.0: **77.3%** (far exceeded previous SOTA; vs 64.0% GPT-5.2-Codex, 62.2% GPT-5.2)
- OSWorld-Verified (visual desktop computer use; humans score ~72%): **64.7%** (vs 38.2% GPT-5.2-Codex, 37.9% GPT-5.2)
- GDPval (wins or ties, 44 occupations): **70.9%** — matches GPT-5.2 (70.9% at high)
- Cybersecurity CTF challenges: **77.6%**
- SWE-bench Verified: no verified public score found (post reports SWE-Bench Pro instead)
- Claw-Eval / ClawProBench: no verified public score found
- Tau2-bench / BrowseComp / MCP-Atlas / Toolathon: no verified public score found
- SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- AIME 2025: no verified public score found
- GPQA Diamond / HLE / FrontierMath / ARC-AGI-2: no verified public score found (post states the model carries "the reasoning and professional knowledge capabilities of GPT-5.2" but publishes no GPT-5.3-Codex reasoning benchmark table)
- Artificial Analysis Intelligence Index: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-Bench Pro (Public): **56.8%** (new industry high at release; vs 56.4% GPT-5.2-Codex, 55.6% GPT-5.2)
- SWE-Lancer IC Diamond: **81.4%** (vs 76.0% GPT-5.2-Codex, 74.6% GPT-5.2)
- Terminal-Bench 2.0: **77.3%** (cross-listed under coding/terminal skills)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No verified public MRCR/GraphWalks/BrowseComp-Long scores found for this model (400K window per docs; long-running agentic work supported via compaction)

Multimodal (raw, for traceability):

- OSWorld-Verified (vision-based desktop tasks): **64.7%** — the only verified visual benchmark
- Chart/document/video benchmarks (CharXiv, MMMU-Pro, VideoMMMU, ScreenSpot-Pro): no verified public score found

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.0 77.3% was the industry SOTA at release and OSWorld-Verified 64.7% is a step change in computer use (prior GPT models ~38%), plus GDPval 70.9% win-or-tie matches GPT-5.2's expert-level knowledge work — but general tool-calling breadth (no tau2/MCP-Atlas/Toolathon numbers found) keeps it just under the very top.
- **Reasoning: 74/100.** The post explicitly positions it as carrying GPT-5.2's reasoning/professional-knowledge capabilities (GDPval 70.9% matches GPT-5.2 exactly), which was 2025-frontier; with no independent GPT-5.3-Codex reasoning benchmark published and GPT-6-generation models now ahead, it scores high-mid by late-2026 standards.
- **Context window: 74/100.** 400K total (272K input + 128K output) maps into the 200K–500K band; it is built for long-running, multi-day agentic sessions with compaction, but no measured long-context retrieval numbers (MRCR etc.) were found, so mid-band.
- **Multimodal: 65/100.** Text + image in, text out, with OSWorld-Verified (64.7%) proving usable visual computer interaction — but no verified chart/video/document benchmarks and no video input, so mid rather than high for a 2026-era model.
- **Coding: 86/100.** SWE-Bench Pro 56.8% (industry SOTA), SWE-Lancer IC Diamond 81.4%, and Terminal-Bench 2.0 77.3% — the best coding numbers OpenAI had published as of early 2026, ahead of GPT-5.2 and GPT-5.2-Codex on every line.
- **Cost efficiency: 56/100.** $1.75/$14 per 1M (same sticker as GPT-5.2) with no free tier; for its SOTA coding capability it trades off against cheaper peers, and its 25% faster serving partly offsets the per-task cost.
- **Overall Score: 75.4/100.** Mean of the five non-cost dims (78+74+74+65+86)/5 = 75.4 — the dedicated agentic-coding champion of early 2026: elite coding/terminal/computer-use, GPT-5.2-level general knowledge, with a narrower public benchmark footprint.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (OpenAI GPT-5.3-Codex docs model page and the "Introducing GPT-5.3-Codex" post with appendix, both fetched 2026-10-01); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
