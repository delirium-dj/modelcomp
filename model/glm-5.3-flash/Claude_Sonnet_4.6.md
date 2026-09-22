# GLM 5.3 Flash — findings by Claude Sonnet 4.6

- Source: Anthropic/Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash (`glm-5.3-flash`)
- **Short description:** Zhipu AI's high-efficiency natively multimodal MoE model released August 26, 2026; pre-release tested anonymously as "Ox Alpha" on OpenRouter/OpenCode; designed for frontier intelligence at ~1/10 the cost of flagship GLM-5.3; MIT license open-weights.
- **Provider / access:** Z.ai / Zhipu AI API; Hugging Face (open-weights, MIT license); available on OpenRouter and other providers. Chat Completions API.
- **Release / knowledge:** 2026-08-26 formal release (previewed as "Ox Alpha" prior); knowledge cutoff not publicly disclosed.
- **IDs:** `zhipu/glm-5.3-flash` (no Zen Free ID found based on search results; paid/open-weights)
- **Context window:** 1,000,000 tokens (1M); verified via Z.ai documentation.
- **Modalities:** Text + image + video input; text output; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-08-26):** ~1/10 cost of flagship GLM-5.3; specific per-token pricing varies by provider. Open-weights enable self-hosting at zero per-token cost.
- **Architecture:** 320B total parameters, 18B active parameters; hybrid sparse + linear attention; trained on 30T-token multimodal corpus; MoE; open-weights (MIT license).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (published benchmark data, 2026)
- AutomationBench: **48.8%** vs GLM-5.2 at 26.2% (major improvement; Z.ai published, 2026)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public Elo score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for 5.3 Flash specifically
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- GLM-5.3 Flagship Terminal-Bench 3.0: 28.3% (for context on flagship vs flash distinction)

Coding:

- DeepSWE v1.1: **63.4** (Z.ai published, 2026 — vs GLM-5.2 at 46.2; +37% improvement)
- SWE-bench Verified / SWE-Pro: no verified public score found for Flash
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 1M context window confirmed; no MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 84.3% approaches the frontier threshold (ref ~88%+ = 90–100; 80–87% ≈ 82–88); AutomationBench 48.8 is strong agentic. No Tau3/GDPval/Claw-Eval. Scored 86.
- **Reasoning: 82/100.** No GPQA/HLE published for Flash specifically. TB2.1 84.3% shows strong agentic reasoning; hybrid architecture with 30T-token training supports broad reasoning. Scored 82 provisionally based on frontier Flash positioning vs flagship GLM-5.3.
- **Context window: 95/100.** 1,000,000 tokens (≥1M) → 95–100; scored 95.
- **Multimodal: 80/100.** Text + image + video input confirmed; trained on multimodal corpus. Per methodology: image+video in = 75–90; scored 80.
- **Coding: 83/100.** DeepSWE 63.4 is high mid-tier (frontier ref ≥74%+ = 90–100; 60–73% ≈ 78–88); TB2.1 84.3% approaches frontier; AutomationBench 48.8 is solid agentic. Scored 83.
- **Cost efficiency: 96/100.** ~1/10 cost of flagship GLM-5.3; open-weights for self-hosting. Estimated competitive pricing well below $1/1M input; scored 96 for near-zero cost with open-weights.
- **Overall Score: 85/100.** Mean of (Tool 86 + Reasoning 82 + Context 95 + Multimodal 80 + Coding 83) / 5 = 426 / 5 = 85.2 → 85. Best-fit: cost-efficient frontier Flash model for agentic coding and multimodal workflows; exceptional value with MIT open-weights for on-premise deployment.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6)** — 2026-09-21
- Method: Independent public internet research (Z.ai official benchmark data, search results on GLM-5.3-Flash, Hugging Face, published benchmark comparisons); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
