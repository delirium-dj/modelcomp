# Kimi K2.6 — findings by Qwen 3.8 27B

- Source: Moonshot AI/Kimi K2.6 (`moonshotai/Kimi-K2.6`; OpenCode Zen `opencode/kimi-k2.6`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-source, native multimodal agentic model (April 2026) focused on long-horizon coding, coding-driven design, proactive autonomous execution, and Agent Swarm orchestration (300 sub-agents across 4,000 coordinated steps). Not a variant/alias of another catalog entry.
- **Provider / access:** OpenCode Zen `opencode/kimi-k2.6` (OpenAI-compatible Chat Completions). No Free ID found on Zen as of 2026-09-29. First-party Moonshot Platform API at `https://platform.moonshot.ai` (OpenAI/Anthropic-compatible). Open weights: `moonshotai/Kimi-K2.6` on Hugging Face (vLLM / SGLang / KTransformers recommended).
- **Release / knowledge:** released 2026-04-20/21 (HF model card + press); knowledge cutoff 2024-10 per models.dev metadata.
- **IDs:** `opencode/kimi-k2.6` (OpenCode Zen); `moonshotai/Kimi-K2.6` (Hugging Face)
- **Context window:** 262,144 tokens total (256K; HF card "Context Length 256K", evals run at 262,144; models.dev: context 262,144 / max output 65,536)
- **Modalities:** text + image + video in (MoonViT 400M vision encoder; video input experimental on third-party deployments, official API only); text out; reasoning: yes (Thinking/Instant modes, interleaved thinking + multi-step tool calls, preserve_thinking); tool calls: yes; JSON mode: not documented
- **Pricing (as of 2026-09-29):** paid — $0.95/M input, $4.00/M output, $0.16/M cached input (models.dev OpenCode Zen metadata; llm-stats lists $0.75/$3.50, Moonshot card confirms paid tier). No free tier found on Zen.
- **Architecture:** MoE — 1T total / 32B activated params; 61 layers, 384 experts (8 selected + 1 shared per token), MLA attention, SwiGLU, 160K vocab; native INT4 quantization; open weights under Modified MIT license.

### Raw benchmarks found

Agent / tool use:

- HLE-Full (w/ tools): **54.0%** (Moonshot model card; vs GPT-5.4 xhigh 52.1, Claude Opus 4.6 53.0, Gemini 3.1 Pro 51.4, Kimi K2.5 50.2)
- BrowseComp: **83.2%**; BrowseComp (Agent Swarm mode): **86.3%** (Moonshot model card)
- DeepSearchQA: f1 **92.5** / accuracy **83.0**; WideSearch item-f1 **80.8** (Moonshot model card)
- Toolathlon: **50.0%**; MCPMark: **55.9%**; APEX-Agents: **27.9%** (Moonshot model card)
- Claw-Eval: pass^3 **62.3** / pass@3 **80.9** (v1.1 harness, Moonshot model card)
- OSWorld-Verified: **73.1%** (Moonshot model card)
- Terminal-Bench 2.0 (Terminus-2): **66.7%** (Moonshot model card, preserve-thinking mode)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (Moonshot model card)
- HLE: **34.7%** no tools / **54.0%** with tools (HLE-Full); text-only subset 36.4% no tools, 55.5% with tools (Moonshot model card)
- AIME 2026: **96.4%**; HMMT Feb 2026: **92.7%**; IMO-AnswerBench: **86.0%** (Moonshot model card)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **54** — highest of any open-weights model (codersera.com summary of the AA page, 2026-08)
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Vision (supporting): MMMU-Pro **79.4%** (w/ python 80.1), MathVision **87.4%** (w/ python 93.2), CharXiv RQ **80.4%** (w/ python 86.7), BabyVision **39.8%**, V* w/ python **96.9%** (Moonshot model card, avg@3)

Coding:

- SWE-bench Verified: **80.2%**; SWE-bench Pro: **58.6%**; SWE-bench Multilingual: **76.7%** (Moonshot model card, in-house SWE-agent-style harness, avg over 10 runs)
- LiveCodeBench (v6): **89.6%** (Moonshot model card)
- SciCode: **52.2%** (Moonshot model card)
- Vibe Code Bench: no verified public score found
- OJBench (python): **60.6%**; DeepSWE: no verified public score found

Long context:

- No long-context retrieval (MRCR / RULER / GraphWalks) reported for the 256K window.

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.0 66.7% sits above the ~45–60% mid band but well under the ~88%+ frontier reference; strong OSWorld-Verified 73.1%, Claw pass^3 62.3, BrowseComp 83.2 (Swarm 86.3), but Toolathlon 50.0, MCPMark 55.9 and APEX-Agents 27.9 cap it below 85, with no Tau3/GDPval values found.
- **Reasoning: 86/100.** GPQA Diamond 90.5% clears the >90% frontier threshold and AIME 2026 96.4% is excellent, but text-only HLE 36.4% (55.5% w/ tools) stays below the 40%+ no-tools frontier reference and AA Index 54 — while best open-weights — is under the 60+ frontier index; no LCR/CritPt found.
- **Context window: 72/100.** 262,144-token window falls in the 200K–500K tier (65–84, 200K ≈ 70); 262K native with 65,536 max output — same tier as the dataset's 262K precedent.
- **Multimodal: 85/100.** Image + video in with text out lands in the +video/PDF band (75–90): MMMU-Pro 79.4 (80.1 w/ python), MathVision 87.4 (93.2 w/ python), CharXiv 80.4 (86.7 w/ python); capped under 90 for no audio in / non-text out and video being experimental outside the official API.
- **Coding: 84/100.** SWE-bench Verified 80.2% and LiveCodeBench 89.6% are near-frontier with SWE-Pro 58.6% and Multilingual 76.7% solid, but SciCode 52.2% is below the 55%+ frontier reference, TB2.0 66.7% is mid-band, and no Vibe/DeepSWE numbers were found.
- **Cost efficiency: 89/100.** $0.95 in / $4.00 out / $0.16 cached per 1M — slightly better than the ~$1.25/$4.25 anchor (~88); no Free tier on Zen as of 2026-09-29.
- **Overall Score: 81.4/100.** Mean of the five quality dims (80+86+72+85+84)/5 = 81.4 — best fit: top open-weights agentic workhorse for long-horizon coding and swarm-scale autonomous tasks at a sub-$1 input price point.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-29
- Method: public internet research (Hugging Face model card `moonshotai/Kimi-K2.6`, models.dev OpenCode Zen metadata, search-engine snippets from llm-stats / codersera / siliconflow, retrieved 2026-09-29); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
