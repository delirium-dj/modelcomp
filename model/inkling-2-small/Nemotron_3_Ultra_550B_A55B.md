## Fledge Alpha

- **Name:** Fledge Alpha (a.k.a. `fledge-alpha-free` on OpenCode Zen)
- **Short description:** Free OpenCode Zen listing (Oct 1, 2026). Stealth multi-model router; routing probes show DeepSeek V4.1 and Kimi K3 backends plus unidentified model. Vendor identity unpublished; no formal benchmarks.
- **Provider / access:** OpenCode Zen (free preview); AnyRouter `stealth/fledge-alpha` alias.
- **Release / knowledge:** 2026-10-01.
- **IDs:** `fledge-alpha`, `fledge-alpha-free` (OpenCode Zen).
- **Context window:** OpenCode catalog says 1,048,576 tokens; 131,072 max output.
- **Modalities:** Text + image in; text out (per models.dev catalog). No audio/video declared.
- **Pricing:** $0/$0 on OpenCode Zen preview (input/output/reasoning all $0).

### Raw benchmarks found
- **Agent / tool use (anecdotal, @MikelEcheve Oct 2 X post):** 61/61 executable code checks (vs 59/61 LongCat, Nemotron timed out); 6/6 math checks; 4/4 logic checks; 12/12 hidden-key retrieval from ~1M-char inputs.
- **GPQA / HLE / MMLU:** No public rows for this ID.
- **SWE-Bench / DeepSWE / LiveCodeBench / SWE-Atlas:** No public rows.
- **Terminal-Bench / Tau3 / MCP Atlas / AutomationBench / GDPval / OSWorld / BrowseComp:** Not reported.
- **Claw-Eval:** Not reported.
- **BenchLM / Artificial Analysis / Vals AI / Epoch AI:** No dedicated page.
- **Architecture:** Undisclosed. Tokenizer probes show heterogeneous backends (DeepSeek V4.1, Kimi K3, plus unidentified). Vendor identity unpublished.
- **Cost per task / speed:** $0/$0 during Zen preview; self-host not available (stealth/router).

### Normalized scores (1–100)
- **Tool use: 64/100.** 61/61 code checks in one user's isolated battery vs LongCat 59/61 — directional, not sustained. No standardized agentic benchmarks (TB, MCP, Automation, GDPval). Capped by anecdotal-only evidence.
- **Reasoning: 62/100.** 6/6 math + 4/4 logic on same anecdotal battery; no GPQA/HLE/MMLU public row; AA row unpublished. Capped by missing standard reasoning benchmarks.
- **Context window: 86/100.** 1M window declared; verified via retrieval probes on ~1M-char inputs in same anecdotal report. Methodology: ≥1M = 95-100 if ≥98% retrieval at 512K+; anecdotal verification → 86.
- **Multimodal: 65/100.** Text + image support declared in models.dev catalog; no video/audio row. No public vision benchmarks (MMMU, MathVision, etc.).
- **Coding: 64/100.** 61/61 live code checks in same tester's battery — directionally strong; no SWE-Bench, DeepSWE, LiveCodeBench, SWE-Atlas row. Capped by anecdotal-only evidence.
- **Cost efficiency: 100/100.** $0/$0 during OpenCode Zen preview.
- **Overall Score: 68/100.** Half-up mean of (64+62+86+65+64)/5 = 341/5 = 68.2 → 68. All quality dims capped as unverified pending real eval.

---
*Source: Fledge Alpha self-report (opencode/fledge-alpha-free) — 2026-10-02. Method: public internet research (OpenCode Data page, promptblueprints news, stealthmodels.com analysis, AnyRouter listing, llmdir, modelcompare.dev, nodeloc chat). No first-party benchmark table exists for the ID as of Oct 2, 2026.*