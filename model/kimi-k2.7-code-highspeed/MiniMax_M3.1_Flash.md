# Kimi K2.7 Code Highspeed — findings by MiniMax M3.1 Flash

- Source: Moonshot AI (Kimi K2.7 Code HighSpeed), `kimi-k2.7-code-highspeed`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code Highspeed (Moonshot's high-speed serving profile of Kimi K2.7 Code)
- **Short description:** The same weights as Kimi K2.7 Code, served on a faster decode profile (≈180 tok/s, up to 260 tok/s in short-context scenarios) for exactly 2× the token price. **Variant/alias flag:** Moonshot states three times that "the two are the same model with identical parameters; only the output speed differs" — this is a serving profile, not a separate checkpoint, so all quality numbers below belong to the base Kimi K2.7 Code model. **Folder status:** `model/kimi-k2.7-code-highspeed/` is a parked alias (RULES.md, "Serving-tier identity") — the tracked entry is `model/kimi-k2.7-code/`, where the same research is filed under this stem; this file is the parked-folder record and is hidden from the site.
- **Provider / access:** Moonshot/Kimi Open Platform Chat API (`https://api.moonshot.ai/v1/chat/completions`, model `kimi-k2.7-code-highspeed`); also `moonshotai` on models.dev, `aihubmix` and `llmgateway`. **Not on OpenCode Zen** — Zen lists only `kimi-k2.7-code` (plus K2.5/K2.6/K3).
- **Release / knowledge:** shipped **June 2026** as the HighSpeed follow-up to Kimi K2.7 Code (weights published 2026-06-11; AA release date 2026-06-12). Knowledge cutoff not published.
- **IDs:** `kimi-k2.7-code-highspeed` (Moonshot API), `moonshot/kimi-k2.7-code-highspeed` (merge-gateway), `kimi-k2.7-code-highspeed` (aihubmix). The OpenCode Zen id `opencode/kimi-k2.7-code-highspeed` does not exist on Zen.
- **Context window:** **262,144** tokens for both variants (Moonshot pricing table and models.dev). Max output: Moonshot documents a 32k default `max_tokens` for the K2.7 Code family; models.dev lists 262,144 output for both ids — no highspeed-specific cap is documented.
- **Modalities:** input text, image, video; output text; thinking always on (forced), temperature 1.0 / top_p 0.95 fixed; tool calling supported, `tool_choice: "required"` is not.
- **Pricing (as of 2026-10-20):** **$1.90/M in (cache miss), $8.00/M out, $0.38/M cached** — exactly 2× the base Kimi K2.7 Code ($0.95 / $4.00 / $0.19) for the same 262,144-token window.
- **Architecture:** MoE, 1T total / 32B active, 61 layers (1 dense), 384 experts / 8 selected + 1 shared, MLA, SwiGLU, 160K vocab, MoonViT 400M vision encoder, Modified MIT License (open weights).

### Raw benchmarks found

> No separate highspeed scores exist (no Artificial Analysis page, no BenchLM page for the highspeed id). Everything below is the base Kimi K2.7 Code model measured by Moonshot, Vals AI and Artificial Analysis.

Agent / tool use:

- Terminal-Bench 2.1: **67.4%** (AA, https://artificialanalysis.ai/models/kimi-k2-7-code) vs **67.0%** (Vals AI, via BenchLM) · Terminal-Bench Hard: **44.7%** (AA)
- Tau2-bench: **90.06%** (AA) · Tau3-Banking: **20.2%** (AA)
- GDPval-AA: **1037.51** (AA) · GDPval all-pass: **11.2%** (AA)
- MCP Atlas: **76.0%** (Moonshot model card) · CursorBench 3.2: **49.7%** (BenchLM)
- AutomationBench partial: **24.5%** (AA) · EnterpriseOpsGym: **40.2%** (AA) · Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.60%** (AA) · HLE: **35.03%** (AA) · AA-LCR: **79.33%** (AA) · MLCR: **16.1%** (AA) · CritPt: **10%** (AA)
- Artificial Analysis Intelligence Index: **25.81**, #29/121 among open-weight models; output speed **58.8 tok/s** base / **~180–260 tok/s** on the highspeed profile (Moonshot)
- FrontierMath v2 Tiers 1–3: **54.035%** · Tier 4: **12.195%** (BenchLM)
- Omniscience Accuracy / Hallucination Rate: **39.6% / 82.4%** (AA) — a very high hallucination rate for the class

Coding:

- SWE-bench: **78.2%** (Vals AI) · LiveCodeBench: **82.1%** (Vals AI)
- Kimi Code Bench v2: **62.0%** (Moonshot card; GPT-5.5 69.0, Claude Opus 4.8 67.4) · ProgramBench: **53.6%** (Moonshot) · MLS-Bench Lite: **35.1%** (Moonshot)
- SciCode: **47.8%** (AA) · MCPMark-Verified: **81.1%** (Moonshot) · Kimi Claw 24/7 Bench: **46.9%** (Moonshot)

Long context:

- No MRCR / RULER retrieval test published for the K2.7 Code family despite the 262K window.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.1 67%, τ²-bench 90.1%, MCP Atlas 76% and CursorBench 49.7% are solidly mid-to-high band, capped by GDPval-AA 1037 (mid) and AutomationBench 24.5%.
- **Reasoning: 74/100.** GPQA 89.6%, HLE 35.0% and LCR 79.3% are strong, but the AA Intelligence Index is 25.8, FrontierMath Tier 4 is 12.2% and the hallucination rate of 82.4% is a real cap on long unattended work.
- **Context window: 72/100.** 262,144 tokens (256K) maps to the 200K–500K tier; no long-context retrieval measurement is published, so the tier score stays mid-range rather than high.
- **Multimodal: 80/100.** Text, image and video input with a 400M MoonViT vision encoder and text output — video input places it in the 75–90 band.
- **Coding: 78/100.** SWE-bench 78.2%, LiveCodeBench 82.1%, Kimi Code Bench v2 62.0% and MCPMark 81.1% make it one of the stronger open coding models of its class; SciCode 47.8% and Kimi Claw 46.9% keep it out of the frontier band.
- **Cost efficiency: 72/100.** The HighSpeed profile costs exactly double the base model ($1.90/$8.00 vs $0.95/$4.00) for identical weights — the base route would score ~90. Paying 2× for decode speed is a latency trade, not a quality one.
- **Overall Score: 75/100.** Mean of the five quality dims = (72 + 74 + 72 + 80 + 78) / 5 = 75.2 → **75**. Best fit: interactive coding loops where latency matters and the prompt stays under 256K; buy the base `kimi-k2.7-code` unless throughput is the binding constraint.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Moonshot/Kimi platform docs and pricing table, Moonshot Hugging Face card, Artificial Analysis, BenchLM + Vals AI, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.7_Code.md`, using the same headings.
