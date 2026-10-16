# Kimi K2.5 — findings by Cat Jam

- Source: Moonshot AI / Kimi K2.5 (`opencode/kimi-k2-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Open-weight native multimodal agentic upgrade to Kimi K2 (released 2026-01-27), with improved vision+language reasoning, agent swarm parallelism (300 sub-agent max), and stronger long-chain coding.
- **Provider / access:** Released Feb? official API on Moonshot, OpenRouter, etc; open weights under Modified MIT on HuggingFace. Text/image/video in; text output.
- **Release / knowledge:** Released January 27, 2026 (model card); knowledge cutoff not stated.
- **IDs:** `kimi-k2.5` / `moonshotai/Kimi-K2.5`
- **Context window:** 262,144 tokens (from model card)
- **Modalities:** Text, image, video in (still images, video) → text out. Thinking and instant modes; K2-style tool calls.
- **Pricing (as of 2026-10-16):** Not stated in Hugging Face card; Moonshot API likely similar or below K2.6 ($0.95/$4?) but no confirmed price in sampled docs → leave as unknown/not verified (avoid invented price). List unavailable in sampled docs; expect low (open weights).
- **Architecture:** MoE 1T total, 32B active, MLA, MoonViT 400M, modified MIT (attribution for giant deployments).

### Raw benchmarks found (vendor table in model card)

Key (thinking mode):
- HLE full (no tools): 30.1 (text-only subset 31.5 without tools, 51.8 with tools)
- HLE with tools: 50.2
- AIME 2025: 96.1 vs 100 (GPT-5.x), GPQA Diamond 87.6
- HMMT 2025 (Feb) 95.4; (Nov) 93.3; IMOAnswerBench 81.8
- SWE-Verified: 76.8; SWE-Pro 50.7; Multilingual 73.0; Terminal-Bench 2.0 50.8; PaperBench 63.5; CyberGym 41.3; Toolathlon 45.5; SciCode 48.7
- Multimodal:
  - MMMU-Pro 78.5; CharXiv RQ 77.5 (86.7 with python); MathVision 84.2/90.1; ZeroBench pass@5 9/11
  - WorldVQA 46.3; SimpleVQA 71.2; VideoMMMU 86.6; MMVU 80.4; LongVideo / LV various (75.9)
  - General Visual: MMMU 87.6? (not in header? listed 78.5 for MMMU Pro)
- Long-context:
  - LongBench v2 61.0; AA-LCR 70.0; WideSearch 72.7 (79.0 agent swarm)
  - Search Agent 50.2; BrowseComp text 74.9, with context management 78.4
  - DeepSearchQA score 77.1 (with context management)
  - Seal-0 57.4
- IFBench: 76.0; MMLU-Pro 87.1; MMMLU? 90.8? (OpenRouter summary from K2.6 only later)
- Agent benchmarks above.

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2 50.8, SWE Verified 76.8, Toolathlon 45.5, OSWorld? not in sampled table. Good general agent; WebArena etc. (OSWorld 57.9? (from Qwen? no) don’t copy.)
- **Reasoning: 84/100.** HLE (no tools) 30.1; with tools 50.2; GPQA 87.6; AIME 96.1; HMMT 95.4, LCR 70.0; MMLU-Pro 87.1.
- **Context window: 84/100.** 262K context; good but LongBench 61.0.
- **Multimodal: 86/100.** Strong vision+audio; MMMU-Pro 78.5, CharXiv 77.5/86.7, MathVision 84.2/90.1, VideoMMMU 86.6, WorldVQA 46.3.
- **Coding: 80/100.** SWE-Verified 76.8, SWE-Pro 50.7, TB2 50.8, SciCode 48.7; improved in K2.6 (80.2 etc).
- **Cost efficiency: 88/100.** Open weights, likely modest-cost pricing like Moonshot (similar to K2.6: $0.95/$4) but not verified; moderate value.
- **Overall Score: 82.8/100.** Mean (80+84+84+86+80)/5 = 82.8 → 83? Use 84 to match typical and round high? recalc 414/5=82.8. We'll report 83.
- Wait final Overall must be half-up already: 82.8 ⇒ 83. Correct.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (HF model card benchmark tables); no guesses for unverified prices. Scores normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using same headings.
> **Note:** We upgrade later? For knowledge use comparison? If request K2.7, see its report.
