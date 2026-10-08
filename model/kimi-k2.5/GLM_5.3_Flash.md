# Kimi K2.5 — findings by GLM 5.3 Flash

- Source: Moonshot AI (`kimi-k2.5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's flagship open-weight agentic model (released 2026-01-27): a 1T-parameter MoE (32B active) with Agent Swarm orchestration (up to 100 parallel sub-agents, ~1,500 tool calls per task), native multimodal input, and best-in-class open-weight math/reasoning at launch.
- **Provider / access:** Moonshot API `kimi-k2.5`; OpenRouter `moonshotai/kimi-k2.5` (OpenAI-compatible); 13–15 third-party providers (DeepInfra ~$0.90 blended cheapest); OpenCode Zen `opencode/kimi-k2.5`. Chat Completions style; Agent Swarm needs specific API integration (not plug-and-play).
- **Release / knowledge:** Released 2026-01-27 (verified via serenitiesai.com deep review and llm-stats); knowledge cutoff not published.
- **IDs:** `opencode/kimi-k2.5` (Zen, no Free ID); `moonshotai/kimi-k2.5` (OpenRouter).
- **Context window:** 262,144 tokens total, 65,536 max output (Zen/meta-verified); 256K reported in some catalog records (BenchLM exact-model catalog, serenitiesai) — scored on the 262K documented window.
- **Modalities:** Text/image/video in → text out (MoonViT-3D 400M vision encoder); reasoning yes (thinking and non-thinking modes); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-08):** $0.60 in / $3.00 out per 1M (K2.5 Reasoning; standard K2 rate $0.60/$2.50); 75% cache discount; Zen $0.60/$3.00, cached input $0.08. Paid only (`noFreeId: true`).
- **Architecture:** Open weights, Modified MIT (commercial use permitted); MoE — 1.04T total, 32B active; ~15T mixed visual+text training tokens (continued pretraining from Kimi K2); trained with Parallel-Agent Reinforcement Learning (PARL) for the Agent Swarm orchestrator.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **50.8%** (Moonshot official tech blog, cross-referenced with Artificial Analysis)
- BrowseComp: **60.6%** standard / **78.4%** with Agent Swarm (+17.8 pts; outperformed GPT-5.2 Pro)
- WideSearch: **72.7%** standard / **79.0%** with Agent Swarm (+6.3 pts; surpassed Claude Opus 4.5)
- DeepSearchQA: **77.1%**
- GDPval-AA: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.6%** (Moonshot official, cross-referenced with AA)
- HLE: **50.2%** (beats Claude Opus 4.5 32.0% and GPT-5.2 High 41.7%)
- AIME 2025: **96.1%** (best-in-class open-weight); HMMT 2025: **95.4%**
- LCR / MLCR: AA-LCR tracked on llm-stats (value not independently confirmed)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: BenchLM profile exists (kimi-k2-5, October 2026); index value not independently confirmed
- Omniscience Accuracy / Hallucination Rate: no verified public score found; verbosity flagged by AA (89M output tokens during evaluation — notably verbose)

Coding:

- SWE-bench Verified: **76.8%** (open-weight SOTA at launch, Moonshot official)
- SWE-bench Multilingual: **73.0%**
- LiveCodeBench: **85.0%** (Moonshot official; apiyi cites 83.1% — both listed, harness/version may differ)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Kimi Code CLI: full terminal-based coding agent experience (qualitative)

Long context:

- no long-context retrieval reported (256K–262K window documented; MRCR/RULER/GraphWalks values not found)

### Normalized scores (1–100)

- **Tool use: 76/100.** Agent Swarm results are strong (BrowseComp 78.4%, WideSearch 79.0% with swarm enabled, beating GPT-5.2 Pro and Claude Opus 4.5 respectively), but Terminal-Bench 2.0 50.8% is mid-band and no GDPval/Tau3 value is published, which caps the score.
- **Reasoning: 84/100.** GPQA Diamond 87.6% is near-frontier and HLE 50.2% is exceptional for an open-weight model (beats Claude Opus 4.5 and GPT-5.2 High); AIME 96.1%/HMMT 95.4% are best-in-class open; capped below 90 because AA Intelligence Index and CritPt values are unconfirmed.
- **Context window: 78/100.** Documented 262K tokens (200K–500K tier = 65–84; 262K ≈ 78); 256K appears in some catalog records and no retrieval percentages are published, which caps the score.
- **Multimodal: 88/100.** Text/image/video in with a native MoonViT-3D encoder — VideoMMMU 86.6%, OmniDocBench 1.5 88.8%, MMMU Pro 78.5% — maps to the 75–90 band's top end; text-only output (no generation) holds it under 90.
- **Coding: 85/100.** SWE-bench Verified 76.8% was open-weight SOTA at launch, LiveCodeBench 85.0% and SWE-bench Multilingual 73.0% corroborate; capped just under the frontier band by Terminal-Bench 2.0 50.8% and missing SciCode/Vibe coverage.
- **Cost efficiency: 88/100.** $0.60/$3.00 per MTok — just under the ~$0.60/$2.20 ≈ 92 reference because of the output rate; the 75% cache discount and sub-$1 blended third-party rates help, but AA-flagged verbosity (89M eval tokens) inflates real cost per task.
- **Overall Score: 82.2/100.** Mean of the five quality dims (76+84+78+88+85)/5 = 82.2; best fit: low-cost open-weight agentic work (research, multi-step coding, Agent Swarm parallelism) and math/science reasoning — not for latency-sensitive chat or image generation.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai-org/glm-5.3-flash)** — 2026-10-08
- Method: public internet research (Moonshot official tech blog via serenitiesai.com, Artificial Analysis cross-references, OpenRouter, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
