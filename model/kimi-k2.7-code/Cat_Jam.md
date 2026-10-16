# Kimi K2.7-Code — findings by Cat Jam

- Source: Moonshot AI / Kimi K2.7-Code (`opencode/kimi-k2-7-code`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7-Code
- **Short description:** Coding-focused agentic model on top of K2.6 (released 2026-06-12). Open weights (Modified MIT), always thinking, 256K context, ~30% fewer reasoning tokens.
- **Provider / access:** Moonshot API (`kimi-k2.7-code`), Kimi Code CLI/IDE, many hosts (OpenRouter, etc); OpenAI/Anthropic-compatible.
- **Release / knowledge:** Released June 12, 2026. Knowledge cutoff not stated (base K2.6 likely April-era).
- **IDs:** `moonshot/kimi-k2.7-code`
- **Context window:** 262,144; max output 262,144. Verified (LiteLLM/OpenRouter).
- **Modalities:** Text, image, video in; text output. Always thinking (non-thinking not supported), tool calling, structured output, prompt caching.
- **Pricing:** Official Moonshot $0.95/$4.00 per 1M input/output; cache hit 80% (0.19/$0.18-$0.19 provider range). Hosted discounts down to $0.275/$1.1 on aggregators.
- **Architecture:** MoE 1T total / 32B active (384 experts, 8 routed+1 shared), 61 layers, MLA, SwiGLU, 400M MoonViT, Modified MIT open weights.

### Raw benchmarks found

Vendor table (all thinking enabled):
- Kimi Code Bench v2: 62.0 (K2.6 50.9; +21.8%)
- Program Bench: 53.6 (K2.6 48.3)
- MLS Bench Lite: 35.1 (K2.6 26.7)
- Kimi Claw 24/7 Bench: 46.9 (K2.6 42.9)
- MCP Atlas: 76.0 (K2.6 69.4)
- MCP Mark Verified: 81.1 (K2.6 72.8)

Independent AA (25.8 composite):
- AA Intelligence Index: 25.8 (AA measured)
- AA-GPQA Diamond: 89.6%; HLE 35.0 (AA)
- IFBench 63.1; τ²-Telecom 90.1 (AA)
- AA-LCR 79.3 (AA)
- τ-banking 20.2; CritPt 10.0; SciCode 47.8
- Terminal-Bench Hard 44.7, TB4 1.0 (AA), TB2.1 67.4
- AA-Omniscience acc 39.6 / non-hall 17.6 (weak on missing answers)
- Design Arena coding Elos ~1175–1266
- Vals: SWE-bench 78.2%, LiveCodeBench 82.0, Terminal-Bench 2.1 67.0, Vals Index 48? (not precise)

### Normalized scores (1–100)

- **Tool use: 84/100.** MCP Atlas 76.0, MCP Mark 81.1, MCP-level tasks, Terminal-Bench 2.1 67.4, TB Hard 44.7; strong tool-assisted coding.
- **Reasoning: 80/100.** HLE 35.0, GPQA 89.6, AA index 25.8, LCR 79.3; CritPt 10.0 caps. AA composite low (v4.3.2).
- **Context window: 86/100.** 262K context window.
- **Multimodal: 84/100.** Text/image/video input; text out; no audio-specific benchmark in sampled source.
- **Coding: 82/100.** Kimi Code Bench 62, Program 53.6, SWE-bench 78.2, LCB 82; strong on vendor task sets; AA coding index 60.8.
- **Cost efficiency: 88/100.** $0.95/$4 (cache $0.19) plus ~30% fewer reasoning tokens vs K2.6.
- **Overall Score: 83/100.** Mean of 5 quality dimensions: (84 + 80 + 86 + 84 + 82) / 5 = 83.2, rounded to 83.
  
---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Moonshot blog, AI/TLDR, OpenRouter, llmboard); scores normalized 1–100, vendor-only metrics labelled.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using same headings.
