# Xiaomi MiMo-V2.6-Flash — findings by Big Pickle

- Source: Xiaomi (MiMo Open Platform) `mimo-v2.6-flash`
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo-V2.6-Flash (API ID `mimo-v2.6-flash`; weights repo `XiaomiMiMo/MiMo-V2.6-Flash-RL`). Natively omnimodal sibling of the flagship `MiMo-V2.6-Pro` — not an alias of it; the two are separate checkpoints trained in the same 6-day RL run, and Flash is the efficiency/cost tier. The 9B `MiMo-V2.6-Distill-Qwen-9B` is a different, much smaller model and is not covered here.
- **Short description:** Xiaomi's open-weight, natively omnimodal (text/image/video/audio in, text out) sparse-MoE model released 2026-09-22 as the "best balance between intelligence, efficiency, and cost" in the MiMo-V2.6 line. Main use case: cheap long-horizon agent and coding-agent work at 1M context, with fully auditable weights (MIT) you can self-host on 4–8 GPUs.
- **Provider / access:** Xiaomi MiMo Open Platform — `POST https://api.xiaomimimo.com/v1/chat/completions` with `model: "mimo-v2.6-flash"` (OpenAI Chat Completions; a Responses API and an Anthropic-compatible route are also documented). Also on Xiaomi AI Studio, MiMo Code, MiMo Desktop, the MiMo Batch API (50% of real-time rates) and OpenRouter as `xiaomi/mimo-v2.6-flash`. Thinking is toggleable (`extra_body: {thinking: {type: "disabled"}}`); recommended sampling `temperature=1.0`, `top_p=0.95`.
- **Release / knowledge:** released 2026-09-22 (weights + technical report open-sourced same day; Vals AI dates the release 2026-09-21). Knowledge cutoff not disclosed for this checkpoint.
- **IDs:** `mimo-v2.6-flash` (Xiaomi platform, all-lowercase), `xiaomi/mimo-v2.6-flash` (OpenRouter), `XiaomiMiMo/MiMo-V2.6-Flash-RL` (Hugging Face weights). No `*-free` Zen-style ID found; this is a paid tier.
- **Context window:** 1,048,576 tokens (1M) total; max output 128k. Verified two ways — LLM Stats lists 1,048,576 input tokens, and Vals AI's run configuration caps `max output tokens` at 128,000 on the 1M model.
- **Modalities:** text, image, video and audio in; text out; reasoning yes (toggleable); tool calls yes (`--tool-call-parser mimo`, `--enable-auto-tool-choice`); JSON / structured output and web search exposed on the platform. Note: Vals AI's harness could only pass text and image — video input came back "not supported" there, so full omni coverage is vendor-documented rather than independently reproduced.
- **Pricing (as of 2026-09-28):** $0.14 / $0.28 per 1M fresh input / output tokens, $0.0028 per 1M cached input (Xiaomi Open Platform, LLM Stats provider table + Vals AI). Batch API is 50% of real-time rates. Paid tier — no free quota found, so no data-usage/privacy caveat for a $0 tier, but note this is Xiaomi-hosted, so confidential code travels to Xiaomi unless self-hosted.
- **Architecture:** sparse MoE, 309B total / 15B activated parameters, 48 layers (39 sliding-window-attention + 9 global-attention, 128-token window), 256 routed experts with 8 active, 5-layer MTP speculative decoder. Omnimodal front end: 681M MiMo ViT vision encoder (28 layers), 308M AudioTokenizer (20 RVQ codebooks) + 127M audio patch encoder. MIT license — open weights, commercial self-hosting permitted.

### Raw benchmarks found

Agent / tool use:

- Toolathlon-Verified: **73.6%** (Xiaomi official model card; also logged on the HF `harborframework`/`hkust-nlp` eval-result leaderboard)
- Terminal-Bench 2.1: **87.6%** (Xiaomi official model card; HF eval-result leaderboard, identical value)
- Terminal-Bench 4.0: **28.8%** official model card; **21.21% ±1.75** on Vals AI (#15 of 37) — the two harnesses disagree by ~8 points and both are far below TB 2.1
- Terminal-Bench Science: **5.71% ±2.79** (Vals AI, #18 of 33) — the model's single worst cell
- GDPval-AA 2.1: **no Elo reported** for Flash on the official card (Pro: 1673); BenchLM carries a normalized **55.0%** reading for Flash, so treat any "GDPval ~1670" claim about Flash as unverified
- Tau3-Banking / Tau2-Bench: **no verified public score found** for this checkpoint
- AutomationBench v1.0.6: **52.3%** (official model card; the live RL dashboard reports 52.70 avg@3)
- OSWorld-Verified: **80.8%** (official model card)
- Agents' Last Exam: **27.6%** (official model card)
- JobBench: **61.2%** (official model card)
- Vals Index (composite across Vals' suite): **59.58% ±1.13**, **#17 of 66** open-weight models, at **$0.197 cost per test** (Vals AI)
- Domain agents: Finance Agent v2 **56.28%** (#16/70), Tax Agent Bench **59.90%** (#30/61), Legal Research Bench **37.98%** (#29/69), SAGE **43.53%** (#46/88), Harvey's Legal Agent **11.25%** (#8/70), Public Benefits Bench v1.1 **67.59%** (#11/43), ProofBench v1.1 **63.00%** (#15/41), MedCode **41.06%** (#54/102), MedScribe **85.28%** (#26/104), EMB **65.46%** (#19/66) (all Vals AI)
- Security tooling: CyberGym **95.1%**, MiMo Cyber Bench **77.2%** (official); Vals CyberBench v1.1 **75.36% ±5.42** (**#4 of 41**) — a genuine strength. Weaker on exploitation: ExploitGym **6.0%**, ExploitBench **25.3%**, SEC Bench Pro **47.5%** (official)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **37.9** (BenchLM, AA-sourced). Sibling Pro scores 46 and MiMo-V2.5-Pro 43 on the same index, so Flash sits mid-pack for a 2026 open-weight model, not at the frontier.
- HLE (AA-HLE): **35.1%** (BenchLM/Artificial Analysis, text-only pass@1)
- CritPt: **12.0%** (Artificial Analysis)
- LCR / MLCR: **AA-LCR 74.3%** (Artificial Analysis) — solid long-context comprehension
- GPQA Diamond: **no verified public score found** for MiMo-V2.6-Flash. The widely quoted 83.7% belongs to the *earlier* MiMo-V2-Flash (Dec 2025) and must not be carried over; the V2.6 card omits GPQA entirely.
- Omniscience Accuracy / Hallucination Rate: **27.0% / 54.4%** (Artificial Analysis; Omniscience Index **-12.7**) — the model's most damaging profile: it hallucinates more often than it is right on closed-book factual recall
- Other reasoning-adjacent: IOI **47.67% ±4.79** (#23/36), MysteryMechanism **21.62% ±2.77** (#14/19), BioMysteryBench **69.26%** (#11/19) (Vals AI)
- MMLU-Pro / AIME 2025 / LiveCodeBench: **no verified public score found** for this checkpoint

Coding:

- DeepSWE v1.1: **67.9%** (official model card, mini-swe-agent harness); the live RL dashboard reports **65.68** avg@3 at step 30, up from 48.8 at RL step 1 — real measured self-improvement, not a one-shot number
- SWE-bench Verified: **no verified public score found** for MiMo-V2.6-Flash. (The 61.1 → 66.2 improvement Xiaomi reports belongs to the 9B Distill-Qwen RL ablation, not to Flash.) Epoch AI currently flags SWE-bench Verified and DeepSWE v1.1 as flawed because of scoring details — treat both as directional.
- SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **51.3%** (Artificial Analysis) — close to, but under, the 55% frontier line
- Vibe Code Bench v1.1: **78.96% ±4.04** (**#20 of 104**) (Vals AI) — real shipped-app quality, a genuine strength
- MiMo Code Bench: **61.2%** (official; the live RL dashboard reports 62.87 avg@3)
- ProgramBench: **26.0%** official model card vs **0.50% ±0.50** on Vals AI (#13/53) — a 25-point harness spread; read as "unreliable at whole-file formal program synthesis", not as either number being a typo
- Code Migration (long-horizon repo work): **40.93% ±4.35** (#24/69) (Vals AI)
- MiMo VisualCoding: **71.5%** (official; Pro 72.3, Claude Opus 5 70.0, GPT-5.6 Sol 73.4)

Long context:

- 1M window is claimed and configured, but **no verified 1M retrieval measurement (MRCR / RULER / GraphWalks at 512K+) published for this checkpoint** — the strongest published long-context evidence is indirect: Vals AI notes the model "hits the 128k output cap on a handful of long agentic tasks (most often on Code Migration), which count as failures", and Code Migration scores 40.93%. The architecture family (hybrid SWA + attention sink) is the same lineage whose 256K predecessor reported near-100% NIAH from 32K–256K, but that is a different model at a different window length.
- Serving reality check: p95 time-to-first-token ~20.15s and p5 sustained output ~3 chars/s on the Xiaomi endpoint (LLM Stats, trailing 7 days) — a 1M window is not the same as fast 1M-window work.

### Normalized scores (1–100)

- **Tool use: 84/100.** Frontier-adjacent on the classic agentic tool suites — Terminal-Bench 2.1 87.6%, Toolathlon-Verified 73.6%, OSWorld-Verified 80.8% — plus a standout Vals CyberBench v1.1 75.36% (#4/41). Capped well below 90 by harness inconsistency: Terminal-Bench 4.0 collapses to 28.8% official / 21.21% on Vals, Terminal-Bench Science is 5.71%, Agents' Last Exam 27.6%, GDPval-AA normalized only 55.0% with no Flash Elo, no Tau3/Tau2 figure at all, and Legal Research 37.98% / Harvey Legal 11.25% show the tool-use ceiling is domain-specific rather than general.
- **Reasoning: 72/100.** AA-HLE 35.1% and AA-LCR 74.3% are solidly above the mid band, and the Intelligence Index 37.9 outranks the entire V2/2.5 Xiaomi line. Capped by the knowledge-grounding profile: Omniscience Accuracy 27.0% against a 54.4% hallucination rate (index -12.7) is the worst ratio among the models I checked, and CritPt 12.0% plus a missing GPQA Diamond leave the scientific-reasoning ceiling unproven rather than demonstrated.
- **Context window: 95/100.** 1,048,576 tokens total with 128k max output puts it in the top tier, and it beats the 1M-and-no-measurement cases on paper. It does not reach 100 because no verified ≥98% retrieval-at-512K+ measurement exists for this checkpoint, and the independent harness recorded 128k output-cap failures on the longest agentic tasks. The 128k output cap is a caveat, not a separate penalty.
- **Multimodal: 92/100.** Natively omnimodal in one checkpoint — text, image, video and audio in, text out, with a 681M ViT encoder and a real audio tokenizer stack, which the methodology places in the 90–100 band. AA-MMMU-Pro 73.1% and MiMo VisualCoding 71.5% (level with Claude Opus 5 at 70.0%) show the vision path actually works, but the independent Vals run could not pass video input, so the omni claim is vendor-documented rather than independently reproduced.
- **Coding: 79/100.** DeepSWE v1.1 67.9%, Vibe Code Bench 78.96% (#20/104), AA-SciCode 51.3% and MiMo Code Bench 61.2% put it just under the 90–100 frontier band (which wants DeepSWE 74%+, SciCode 55%+). Capped by two hard holes — no SWE-bench Verified figure for this checkpoint and ProgramBench collapsing to 26.0% official / 0.50% on Vals — plus Code Migration 40.93% showing real strain on long repo-scale edits.
- **Cost efficiency: 97/100.** $0.14 in / $0.28 out per 1M with $0.0028 cached input is a hair above the ~$0.10/$0.20 band (97–99) and far below the $0.60/$2.20 (≈92) and $1.25/$4.25 (≈88) reference points. Vals independently measures it at $0.197 per test while scoring #17/66 on accuracy, which is the best accuracy-per-dollar ratio in its field. MIT weights mean the same per-token economics apply to a free self-hosted deployment. Not 100 — it is a paid tier, not $0.
- **Overall Score: 84.4/100.** Half-up mean of the five quality dims: (84 + 72 + 95 + 92 + 79) / 5 = 84.4. Best fit: the default open-weight pick for cheap long-horizon agent and coding-agent workloads that need real image/video/audio input and a 1M window — pair it with a hallucination-audited second pass, or escalate to `mimo-v2.6-pro`, when factual precision or whole-file formal synthesis is the point.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-28
- Method: public internet research (Xiaomi MiMo docs/news, the official `XiaomiMiMo/MiMo-V2.6-Flash-RL` Hugging Face model card, the Xiaomi live RL dashboard, Vals AI model page, BenchLM model page, Artificial Analysis-sourced rows, LLM Stats provider table, OpenRouter API docs). Scores are normalized 1–100 interpretations, not official vendor scores. Numbers carried over from the earlier MiMo-V2-Flash / MiMo-V2.5 checkpoints were deliberately excluded.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
