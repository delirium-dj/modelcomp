# Kimi K2.7 Code — findings by Muse Spark 1.3

- Source: Moonshot AI/Kimi K2.7 Code (`opencode/kimi-k2.7-code`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's Jun 2026 coding-focused 1T-parameter variant: +76.2% SWE Marathon and +11.4% MCP Mark Verified over K2.6 at ~30% fewer reasoning tokens, thinking-mode-gated. Top use case: long-horizon agentic coding runs at mid-tier pricing.
- **Provider / access:** Moonshot AI (platform.moonshot.ai; OpenRouter/DeepInfra/Fireworks/Cloudflare third parties; Kimi For Coding); OpenCode Zen ID `opencode/kimi-k2.7-code`.
- **Release / knowledge:** 2026-06-12 release (Kimi Code docs whats-new); open-sourced per Moonshot (ModelCap classifies the published repo metadata as restricted license — noted, not resolved). Knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/kimi-k2.7-code` (Zen-hosted; Moonshot native `moonshotai/kimi-k2.7-code`).
- **Context window:** 262K tokens (ModelCap catalogue; provider tables list 262K uniformly). No public retrieval-at-length numbers found.
- **Modalities:** Tagged Multimodal on llm-stats Moonshot org page (K2 family carries native text/image/video); reasoning yes (Thinking On required); tool calls yes. Exact K2.7-Code modality list not itemized — scored by family proxy (provisional).
- **Pricing (as of 2026-09):** $0.95 input / $4.00 output per 1M direct via Moonshot and most providers (ModelCap provider table); OpenRouter listed $0.66/$3.40, DeepInfra live $0.68/$3.40 (ModelCap, Sep 2026).
- **Architecture:** 1T-parameter MoE (llm-stats org page; active count undisclosed for this cut).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (AA run): **67.4%, #79 of 235** (ModelCap-tracked Artificial Analysis board, Sep 2026)
- Tau2-Bench Telecom (AA): **90.1%, #68 of 436** (ModelCap-tracked AA board, Sep 2026)
- MCP Mark Verified: **+11.4% over K2.6** (Moonshot release notes via Kimi Code docs — relative only)
- WildClawBench (OpenClaw): **46.9, #17 of 34** (ModelCap-tracked board, Sep 2026)
- LMArena Agent: **0.7%, #31 of 59** (ModelCap-tracked board — weak crowd-vote signal, noted)
- Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval: **no verified public score found** (WildClawBench above is a different harness)
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- HLE (AA): **35.0%, #81 of 598** (ModelCap-tracked AA board, Sep 2026)
- GPQA Diamond: **no verified public score found** (closest proxy, provisional: sibling K2.6-class frontier-adjacent scores, e.g. HLE-with-tools 54.0% vs GPT-5.5's 52.1% per aitoolsrecap)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** (ModelCap Index 57.3, #47 — composite aggregator, not AA proper)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified, Kimi K2.7 Code (Vals AI, by task difficulty): **89% / 75% / 50% / 33%** (Vals AI page, Sep 2026 — strongest <15min split on the board)
- SWE Marathon: **+76.2% over K2.6** (Moonshot release notes — relative only)
- Program-Bench: **+10.4% over K2.6** (Moonshot release notes — relative only)
- Kimi Code Bench v2: **+21.8% over K2.6** (emergent.sh guide, citing Moonshot — relative only)
- SWE-bench Pro: **no verified public score found** (sibling K2.6: 58.6%, tied GPT-5.5)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported (262K window verified via provider tables; no public MRCR/RULER/GraphWalks number)

### Normalized scores (1–100)

- **Tool use: 84/100.** Tau2-Telecom 90.1 plus TB 2.1 67.4% (AA) and the +11.4% MCP Mark gain evidence strong tool orchestration; capped by no Tau3/GDPval numbers and a weak LMArena Agent crowd signal (0.7%).
- **Reasoning: 76/100.** AA HLE 35.0% is a verified mid-upper reasoning mark; capped hard with no Plus-cut GPQA/LCR/CritPt/Index numbers (K2.6 family proxies noted, not scored).
- **Context window: 74/100.** Verified 262K sits just above the 200K (= 70) anchor in the 200K–500K tier; no retrieval evidence to push higher.
- **Multimodal: 80/100.** Provisional on the explicit Multimodal tag and K2-family native video; held at 80 pending an itemized modality list for this exact cut.
- **Coding: 84/100.** Vals splits (89/75/50/33) lead the board under 15 min and hold 75% at 15m–1h; capped by missing absolute SWE-Verified/Pro and LiveCodeBench numbers for this cut.
- **Cost efficiency: 90/100.** $0.66–$0.95 input / $3.40–$4.00 output spans the $0.60/$2.20 (≈92)–$1.25/$4.25 (≈88) value band — 90 on balance.
- **Overall Score: 80/100.** Mean of the five non-cost dims (84 + 76 + 74 + 80 + 84) / 5 = 79.6 → 80; best fit as an efficient long-horizon coding specialist with thinking mode on.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (Kimi Code official docs, ModelCap index + board tracking, Vals AI SWE-bench page, llm-stats Moonshot org page, aitoolsrecap/emergent guides); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
