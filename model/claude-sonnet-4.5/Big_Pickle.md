# Claude Sonnet 4.5 — findings by Big Pickle

- Source: Anthropic/Claude Sonnet 4.5 (`claude-sonnet-4.5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's September 2025 Sonnet flagship — "best coding model in the world" at launch, strongest long-horizon agent and computer-use model of its generation (shipped with the Claude Agent SDK). Superseded by Sonnet 4.6 (Feb 2026). Distinct entry from `claude-sonnet-4.6`/`claude-sonnet-5`.
- **Provider / access:** Anthropic Claude API / Bedrock / Vertex AI (`claude-sonnet-4-5`, dated `claude-sonnet-4-5-20250929`); on OpenCode Zen `opencode/claude-sonnet-4.5` (Chat Completions-style endpoint).
- **Release / knowledge:** 2025-09-29 (ASL-3 protections); knowledge cutoff not publicly confirmed.
- **IDs:** `anthropic/claude-sonnet-4-5`, `opencode/claude-sonnet-4.5`
- **Context window:** 1,000,000 tokens input (Anthropic reported 1M-config SWE run; primary scores use 200K thinking budget), max output 64K.
- **Modalities:** text + image input (vision, doc/file input); text output; extended/interleaved thinking; native tool calling (Claude Code scaffold, computer use); no non-text output.
- **Pricing (as of 2026-09-24):** $3.00 / $15.00 per 1M input/output tokens; cached input $0.30/1M (Anthropic, verified 2026-08-18 via AI Release Tracker). Paid only.
- **Architecture:** proprietary; hybrid reasoning model, parameters not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **51.0%** (Terminus 2 framework, Claude Sonnet 4.6 system-card table snapshot)
- OSWorld-Verified (computer use): **61.4%** (Anthropic, best-in-class at launch, 100 max steps, avg 4 runs)
- Claw-Eval / Tau3-Banking / GDPval-AA: no verified public score found
- Artificial Analysis Agentic Index (ModelBench): **26.4** (#73/190)

Reasoning / knowledge:

- GPQA Diamond: **83.4%** (Anthropic lab-reported, AI Release Tracker)
- AA-GPQA Diamond proxy: **76.4%** (BenchGecko)
- Artificial Analysis Intelligence Index: **37** (Reasoning mode; 30 non-reasoning) / **37.4** (ModelBench #87/188)
- HLE / LCR / CritPt: no verified public score found
- ARC-AGI-2: **13.6%** (Anthropic lab-reported)

Coding:

- SWE-bench Verified: **77.2%** (200K-config primary, avg 10 trials, no test-time compute) / **78.2%** (1M config) / **82.0%** (parallel test-time compute)
- Vibe Code / LiveCodeBench / SciCode: no verified public score found
- Coding Index (ModelBench): **52.1** (#86/202)
- MMMU (visual reasoning): **68%** (Anthropic lab-reported)

Long context:

- No verified MRCR/RULER/GraphWalks retrieval at 1M reported in sources found; 1M window is documented, with the 1M config scoring SWE 78.2% (caveated by Anthropic's inference-issues postmortem).

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.0 51.0% sits mid-band, but OSWorld 61.4% was the strongest computer-use score of its generation (frontier for that axis); no GDPval/Tau3 to push higher.
- **Reasoning: 78/100.** GPQA Diamond 83.4% and AA Intelligence Index 37 put it solidly above mid-band and top-7-ish at launch; no HLE/LCR published, capped below the 90%+ GPQA tier.
- **Context window: 98/100.** Full 1M window with 64K output (≥1M tier); not 100 because no independently verified retrieval ≥98% at 512K+ and the 1M config carried an Anthropic caveat.
- **Multimodal: 68/100.** Text + image/vision input with text output (MMMU 68%); image-in per methodology 60–70; no audio/video in or non-text out.
- **Coding: 88/100.** SWE-bench Verified 77.2% primary (82.0% high-compute) led the frontier at launch on the "real repo bugfix" axis; below the DeepSWE-74%+/TB-85% frontier tier only on missing long-horizon raw rows.
- **Cost efficiency: 62/100.** $3.00/$15.00 per 1M with $0.30 cached reads — methodology maps $3/$15 ≈ 60; cheap input caching helps a little but it is firmly a paid mid-price model.
- **Overall Score: 82/100.** Mean of five quality dims (76+78+98+68+88)/5 = 81.6 → 82. Best fit: premium long-horizon agentic coding + computer use; priced accordingly.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-24
- Method: public internet research (Anthropic launch post + system cards, Artificial Analysis, ModelBench, AI Release Tracker, BenchGecko, InfoQ/TechCrunch); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.